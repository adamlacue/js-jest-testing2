const highestNumOfList = (num1, num2, num3) => {
    const nums = [num1, num2, num3];
    const high = Math.max(...nums);

    return high;


}

module.exports = highestNumOfList