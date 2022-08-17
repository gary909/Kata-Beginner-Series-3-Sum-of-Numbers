function getSum(a, b) {
    //Good luck!
    let myNum = 0;
    let minNum = Math.min(a, b);
    let maxNum = Math.max(a, b);
    // if (a == b) {
    //     return a;
    // } else if (a < b) {
    //     for (let i = 0; i < myLength; i++) {
    //         myNum = myNum + i
    //     }
    // } else {
    //     for (let i = 0; i < a + 1; i++) {
    //         myNum = myNum + i
    //     }
    // }
    // return myNum;

    // return minNum;

    return (maxNum - minNum + 1) * (minNum + maxNum) / 2;
}

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(1, 1)); // 1
console.log(getSum(1, 2)); // 3
console.log(getSum(-1, 2)); // 2