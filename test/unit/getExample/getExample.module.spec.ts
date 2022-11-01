import getExampleModule    from '../../../src/components/getExample/getExample.module';
import getExampleService   from '../../../src/components/getExample/getExample.service';

const name = 'getExampleModule';

jest.mock('../../../src/components/getExample/getExample.service');

describe(name, () => {
    const headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        (getExampleService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue([
            {
                id: 1,
                name: 'test'
            }
        ]);

        const response = await getExampleModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        (getExampleService as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({});

        try {
            await getExampleModule(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});