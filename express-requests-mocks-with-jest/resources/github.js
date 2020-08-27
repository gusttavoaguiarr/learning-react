const axios = require('axios');

class Github {
    constructor(request = axios) {
        this.request = request;
    }

    async getFollowerCount(username) {
        let response;

        try {
            const { data } = await this.request.get(`https://api.github.com/users/${username}`);
            response = {followers: data.followers};
        } catch (error) {
            const { status, data } = error.response;
            console.log(status);
            if(status == 404) {
                response = { error: data };
            } else {
                response = { error: 'Error' };
            }
        }

        return response;
    }
}

module.exports = Github
