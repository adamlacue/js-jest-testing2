const addAllOdds = (num1, num2, num3) => {
    const nums = [num1, num2, num3];
    
    const odds = nums.filter((num) => num % 2 === 1);
    const sumOfOdds = odds.reduce((sum, odd) => sum + odd, 0);

    return sumOfOdds;
}

module.exports = addAllOdds;
