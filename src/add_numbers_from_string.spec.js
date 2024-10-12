import add from "./add_numbers._from_string"
import { testData } from "./constants"

describe('add numbers from string: function add', () => {
    test('it should return 0 if the parameter if empty string', () => {
        const givenOutput = add(testData.emptyString.input);
        expect(givenOutput).toBe(testData.emptyString.output);
    })
})