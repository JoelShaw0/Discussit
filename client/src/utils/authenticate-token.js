const admin = require('firebase-admin');

const PRIVATE_KEY_ID = process.env.FIREBASE_PRIVATE_KEY_ID;
const PRIVATE_KEY = (process.env.NODE_ENV === "production" ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY) : process.env.FIREBASE_PRIVATE_KEY);
const CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
const CLIENT_ID = process.env.FIREBASE_CLIENT_ID;
const AUTH_URI = process.env.FIREBASE_AUTH_URI;
const TOKEN_URI = process.env.FIREBASE_TOKEN_URI;
const AUTH_CERT = process.env.FIREBASE_AUTH_CERT;
const CLIENT_CERT = process.env.FIREBASE_CLIENT_CERT;

const SERVICE_ACCOUNT = {
    type: "service_account",
    project_id: "Discussit",
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY,
    client_email: CLIENT_EMAIL,
    client_id: CLIENT_ID,
    auth_uri: AUTH_URI,
    token_uri: TOKEN_URI,
    auth_provider_x509_cert_url: AUTH_CERT,
    client_x509_cert_url: CLIENT_CERT
}

admin.initializeApp({
    credential: admin.credential.cert(SERVICE_ACCOUNT),
    databaseURL: 'https://discussit-cef65-default-rtdb.firebaseio.com/'
});

const devUser = {
    iss: 'https://securetoken.google.com/Discussit',
    aud: 'Discussit',
    auth_time: 1625241363,
    user_id: '_dev_account',
    sub: '_dev_account',
    iat: 1625241363,
    exp: 1625244963,
    email: 'dev@example.com',
    email_verified: false,
    firebase: { identities: { email: [Array] }, sign_in_provider: 'password'},
    uid: '_dev_account'
}

async function decodeIDToken(req, res, next) {
    const header = req.headers?.authorization;
    if(header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')) {
        const idToken = req.headers.authorization.split('Bearer ')[1];
        if(idToken === "dev") {
            req['currentUser'] = devUser;
            req['authToken'] = null;
        } else {
            try {
                const decodedToken = await admin.auth().verifyIdToken(idToken);
                req['currentUser'] = decodedToken;
                req['authToken'] = idToken;
            } catch (err) {
                console.log("Error decoding token: " + err);
            }
        }
    }

    next();
}
