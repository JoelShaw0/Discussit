const axios = require('axios');

const FB_URL = "https://discussit-cef65-default-rtdb.firebaseio.com/";

exports.getValueAtPath = async (authkey, path) => {
    var builtPath = `${FB_URL}${path}.json`;
    if(authkey != null) builtPath += `?auth=${authkey}`;

    // Send our request, wait for response
    try {
        const result = await axios.get(builtPath);
        //console.log(result.data);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

exports.getManyAtPath = async (authkey, path, keys) => {
    var builtPath = `${FB_URL}${path}.json`;
    if(authkey != null) builtPath += `?auth=${authkey}`;

    try {
        // Get our initial result - all data at that path
        const result = await axios.get(builtPath);

        // Filter our result down so it only has the keys we want
        const filtered = {};
        for(const [key, value] of Object.entries(result.data)) {
            // If our key is in our provided list of keys, add the key/value pair
            // to the list
            if(keys.includes(key)) {
                filtered[key] = value;
            }
        }

        return filtered;
    } catch (e) {
        console.log(e);
    }
}

exports.deleteValueAtPath = async (authkey, path) => {
    ret = 10;
    var builtPath = `${FB_URL}${path}.json`;
    if(authkey != null) builtPath += `?auth=${authkey}`;


    await axios.delete(builtPath)
        .then(res =>{
            //console.log(res);
            //console.log(res.data);
            
        })
        .catch(e =>{
            console.log(e);
            ret = 20;
        });
    return ret;
}

//puts data at a specific path
//IF ANYTHING IS ALREADY AT THAT PATH, IT WILL OVERWRITE
exports.putValueAtPath = async (authkey, path, data) => {

    var ret;
    var builtPath = `${FB_URL}${path}.json`;
    if(authkey != null) builtPath += `?auth=${authkey}`;
    console.log(builtPath);
    
    //put our data
    await axios.put(builtPath, data )
        .then(res => {
            ret = res.data;
        })
        .catch(e =>{
            console.log(e);
            ret = "null";
        });
    
    return ret;
}

//adds data to a path non-destructively with a unique ID
exports.postValueAtPath = async (authkey, path, data) => {
    var ret;
    var builtPath = `${FB_URL}${path}.json`;
    if(authkey != null) builtPath += `?auth=${authkey}`;

    //post our data
    await axios.post(builtPath, data )
        .then(res =>{
            ret = res.data;
        })
        .catch(e =>{
            console.log(e);
            ret = 20;
        });
    return ret;
}
