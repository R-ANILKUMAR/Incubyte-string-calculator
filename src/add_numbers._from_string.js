function add(numbers) {
    if (!numbers) {
        return 0;
    }
    if (!isNaN(numbers)) {
        return parseInt(numbers);
    };
    const arrWithOutDeliminators = numbers.replace(/[^a-zA-Z0-9]/g, '_').split('_').filter(item => typeof Number(item) === 'number' && item);
    let total = 0;
    for (let number of arrWithOutDeliminators) {
        total += parseInt(number)
    }
    return total;
}

export default add;