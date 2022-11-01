import getExampleService   from '../../../src/components/getExample/getExample.service';
const name = 'getExampleService';

// jest.mock('../../../src/models/category.model');

describe(name, () => {
    
    test(`${name} - OK`, async () => {
        const headers = {
            clientname: 'test'
        };

        const response = await getExampleService(headers);
        expect(response.message).toBe('test');
    });

    test(`${name} - NOK`, async () => {
        try {
            await getExampleService({});
        } catch (error: unknown) {
            expect(error).toBeTruthy();
        }
    });
});