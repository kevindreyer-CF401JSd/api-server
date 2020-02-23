const supergoose = require('@code-fellows/supergoose');
const { server } = require('../../src/app.js');
const mockRequest = supergoose(server);

describe('API server errors', () => {
    it('responds with 404 on an invalid route', () => {
        return mockRequest
            .get('/invalid')
            .then(results => {
                console.log('results.stat 404:',results.status);
                expect(results.status).toBe(404);
            })
    })
    it('responds with 500 when an internal server error is raised', () => {
        return mockRequest
            .get('/this_route_will_error')
            .then(results => {
                console.log('results.stat 500:',results.status);
                expect(results.status).toBe(500);
            })
    })

})
