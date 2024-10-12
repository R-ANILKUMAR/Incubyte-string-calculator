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
    twoOrMoreNumbers: {
        input: '8932',
        output: 89,
    },
    twoOrMoreNumbersWithSpecialChars: {
        input: '800**)(&^&%**)(&^&%&^>??<>10&&^(*&*:">:"&90',
        output: 900,
    },
    twoOrMoreNumbersNextLineEscapeAndSpecialChars: {
        input: "1024//;100\n1;200&&^*)(*)",
        output: 1,
    },
}