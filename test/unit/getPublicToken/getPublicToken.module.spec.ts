import getPublicTokenModule    from '../../../src/components/getPublicToken/getPublicToken.module';

const name = 'getPublicTokenModule';

jest.mock('jsonwebtoken');

describe(name, () => {
    
    test(`${name} - OK`, async () => {
        const headers = {
            clientname  : 'test',
            status      : 'test',
        };

        const response = await getPublicTokenModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        try {
            await getPublicTokenModule({});
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});