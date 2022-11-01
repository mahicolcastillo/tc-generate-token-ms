import controller               from '../../../src/components/healtcheck/healthcheck.controller';
import { Request, Response }    from 'express';

/* eslint-disable */
const httpMocks = require('node-mocks-http');

describe('Healthcheck Controller', () => {
    let req: Request, res: Response;

    beforeEach(() => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    });

    test('Should response with statusCode 200', async() => {
        const response = await controller(req, res);
        expect(response.statusCode).toBe(200);
    });
});