const express = require("express");
const app = express();
const Github = require('./resources/github');

// get followers github
app.get('/:username/followers', async (req, res) => {
    const { username } = req.params;
    githubResource = new Github()
    const response = await githubResource.getFollowerCount(username);

    res.json(response);
});

module.exports = app;
