const FBEndpoints = require('./utils/firebase-endpoints');

exports.setApp = function (app) {
    // Test endpoint

    app.get('/api/test', async (req, res, next) => {

        // Check our authentication status
        const auth = req.currentUser;
        const token = req.authToken;
        var ret;
        if (auth) {
            console.log('authenticated!', auth);

            var result = await FBEndpoints.getValueAtPath(token, "/test");
            ret = {message: "Test successful!", data: result};
        } else {
            ret = {message: "Not Authenticated!"}
        }

        // (res)olve our query with a 200 (OK) status, returning a JSON object (ret)
        res.status(200).json(ret);
    })
}