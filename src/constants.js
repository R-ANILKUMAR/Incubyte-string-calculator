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
        input: "//;\n[];2",
        output: 2,
    },
    onlyOneNumberWithNextLineEscapeAndSpecialChars: {
        input: "//;\n1;2",
        output: 3,
    },
    twoOrMoreNumbers: {
        input: '8932',
        output: 8932,
    },
    twoOrMoreNumbersWithSpecialChars: {
        input: '**)(&^&%**)(&^&%&^>??<>&&^( //[1,2,3,4,5,6…]',
        output: 21,
    },
    twoOrMoreNumbersNextLineEscapeAndSpecialChars: {
        input: "1024//;100\n1;200&&^*)(*)**)(&^&%**)(&^&%&^>??<>&&^(   //\n[1,2,3,4,5,6…]",
        output: 1346,
    },
}