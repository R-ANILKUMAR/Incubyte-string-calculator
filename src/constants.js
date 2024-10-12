export const testData = {
    emptyString: {
        input: '',
        output: 0,
    },
    onlyOneNumber: {
        input: '1',
        output: 1,
    },
    onlyOneNumberWithSpecialChars: {
        input: '1,*(*)',
        output: 1,
    },
    onlyOneNumberWithNextLineEscapeAndSpecialChars: {
        input: "//;\n1;2",
        output: 1,
    },
    twoNumbers: {
        input: '89',
        output: 89,
    },
}