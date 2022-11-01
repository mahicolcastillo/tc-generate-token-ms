import getPublicTokenController    from '../../../src/components/getPublicToken/getPublicToken.controller';
import getPublicTokenModule        from '../../../src/components/getPublicToken/getPublicToken.module';
import { createRequest, createResponse } from 'node-mocks-http';

const name = 'getPublicTokenController';

jest.mock('../../../src/components/getPublicToken/getPublicToken.module');

describe(name, () => {
    test(`${name} - OK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getPublicTokenModule as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            code: 200,
            message: 'Success',
            payload: {}    
        });

        const response = await getPublicTokenController(req, res);
        expect(response.statusCode).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getPublicTokenModule as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({
            code: 500,
            message: 'Internal Server Error',
            payload: {}    
        });

        try {
            await getPublicTokenController(req, res);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});