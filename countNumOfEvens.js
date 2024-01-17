const countNumOfEvens = (num1, num2, num3) => {
    const nums = [num1, num2, num3];
    const evenNums = nums.filter(num => num % 2 === 0);

    return evenNums.length;
}

module.exports = countNumOfEvens;
