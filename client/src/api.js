const FBEndpoints = require('./utils/firebase-endpoints');

exports.setApp = function (app) {

    /*
      ====================
      Discussion Endpoints
      ====================
    */

    // Creates a new discussion
    app.post('/api/discussions/create', async (req, res, next) => {

        // Stores the inputted exercise in JSON format.
        const {discussionId, title, description, dateCreated, tags, categories} = req.body;
        const newDiscussion = {discussionId: discussionId, title: title, description: description, dateCreated: dateCreated, tags: tags, categories: categories};
        const token = req.authToken;
  
        var path = "/discussions/";
        var ret;
        var error = '';
        try {
          // Attempts to post the JSON discussion to the database.
          var result = await FBEndpoints.postValueAtPath(token, path, newDiscussion);
          ret = {message: "New discussion created successfully.", data: result};
          res.status(200).json(ret);
        } catch (e) {
          // Prints any error that occurs.
          error = e.toString();
          ret = {message: "Error creating discussion", error: error};
          res.status(400).json(ret);
        }
    })

    // Reads a discussion.
    app.get('/api/discussions/:discussionId', async (req, res, next) => {

        // Stores the inputted exercise in JSON format.
        const token = req.authToken;
  
        var ret;
        var error = '';
        var path = '/discussions/' + req.params.discussionId;
        try {
          // Attempts to post the JSON discussion to the database.
          var result = await FBEndpoints.getValueAtPath(token, path);
          res.status(200).json(ret);
        } catch (e) {
          // Prints any error that occurs.
          error = e.toString();
          ret = {message: "Error finding discussion", error: error};
          res.status(400).json(ret);
        }
    })


    // Updates a discussion
    app.post('/api/discussions/:discussionId/update', async (req, res, next) => {

        // Stores the inputted exercise in JSON format.
        const {discussionId, title, description, dateCreated, tags, categories} = req.body;
        const updatedDiscussion = {discussionId: discussionId, title: title, description: description, dateCreated: dateCreated, tags: tags, categories: categories};
        const token = req.authToken;
  
        var path = '/discussions/' + req.params.discussionId;
        var ret;
        var error = '';
        try {
          // Attempts to post the JSON discussion to the database.
          var result = await FBEndpoints.putValueAtPath(token, path, updatedDiscussion);
          ret = {message: "Discussion updated successfully.", data: result};
          res.status(200).json(ret);
        } catch (e) {
          // Prints any error that occurs.
          error = e.toString();
          ret = {message: "Error updating discussion", error: error};
          res.status(400).json(ret);
        }
    })

    // Deletes a discussion.
    app.post('/api/discussions/:discussionId/delete', async (req, res, next) => {
  
        var path = '/discussions/' + req.params.discussionId;
        var ret;
        var error = '';
        try {
          // Attempts to post the JSON discussion to the database.
          var result = await FBEndpoints.deleteValueAtPath(token, path);
          ret = {message: "Discussion deleted successfully."};
          res.status(200).json(ret);
        } catch (e) {
          // Prints any error that occurs.
          error = e.toString();
          ret = {message: "Error deleting discussion", error: error};
          res.status(400).json(ret);
        }
    })


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