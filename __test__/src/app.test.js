const supergoose = require('@code-fellows/supergoose');
const { server } = require('../../src/app.js');
const mockRequest = supergoose(server);

describe('API server', () => {
    it('responds with 404 on an invalid route', () => {
        return mockRequest
            .get('/fail')
            .then(results => {
                expect(results.status).toBe(404);
            })
    })

})
