const averageOfList = (num1, num2, num3) => {
    const nums = [num1, num2, num3];
    
    const sum = nums.reduce((acc, num) => acc + num, 0);
    const avg = sum / nums.length;
    return avg;
}


module.exports = averageOfList;
