import add from "./add_numbers._from_string"
import { testData } from "./constants"

describe('add numbers from string: function add', () => {
    test('it should return 0 if the parameter is empty string', () => {
        const givenOutput = add(testData.emptyString.input);
        expect(givenOutput).toBe(testData.emptyString.output);
    });
    test('it should return only one number if the input string contains one number with no other elements', () => {
        const givenOutput = add(testData.onlyOneNumber.input);
        expect(givenOutput).toBe(testData.onlyOneNumber.output);
    });
})