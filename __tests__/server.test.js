'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('API Server', () => {

    it('should respond to a GET request at the path of /data', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });

    it('should handle invalid requests', async () => {
        const response = await request.get('/no-route');
        expect(response.status).toEqual(404);
    });

    it('should run through mw on a stamper route', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(response.body.timestamp).toBeDefined();
    });

})