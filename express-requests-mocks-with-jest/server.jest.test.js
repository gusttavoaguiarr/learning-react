const request = require("supertest");
const app = require("./app");
const axios = require('axios');

jest.mock('axios');

describe('Github resource with jest', () => {
    describe('route /', () => {
        describe('when a GET request is done / endpoint', () => {
            test('should respond with the followers count', async() => {
                axios.get.mockResolvedValue({data: { followers: 20 } });

                const response = await request(app).get('/gustavodfaguiar/followers');
                expect(response.body).toEqual({followers:20});
            });

            test('should throw error when the user is not found', async() => {
                axios.get.mockRejectedValue({ response: { data: 'Not Found', status: 404 } });

                const response = await request(app).get('/user_invalid_test/followers');
                expect(response.body).toEqual({error: 'Not Found'});
            });
        });
    });
});
