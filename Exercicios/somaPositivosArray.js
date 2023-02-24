function positiveSum(arr) {
    let result = 0;
    arr.filter((number) => (number >= 0)).forEach(number => {result += number})
    return(result);
}

console.log(positiveSum([0, 2, 3, 4, 5, -2, 0, 7]));
console.log(positiveSum([0]));
