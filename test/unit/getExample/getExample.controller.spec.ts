import getExampleController    from '../../../src/components/getExample/getExample.controller';
import getExampleModule        from '../../../src/components/getExample/getExample.module';
import { createRequest, createResponse } from 'node-mocks-http';

const name = 'getExampleController';

jest.mock('../../../src/components/getExample/getExample.module');

describe(name, () => {
    test(`${name} - OK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getExampleModule as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            code: 200,
            message: 'Success',
            payload: {}    
        });

        const response = await getExampleController(req, res);
        expect(response.statusCode).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getExampleModule as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({
            code: 500,
            message: 'Internal Server Error',
            payload: {}    
        });

        try {
            await getExampleController(req, res);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});