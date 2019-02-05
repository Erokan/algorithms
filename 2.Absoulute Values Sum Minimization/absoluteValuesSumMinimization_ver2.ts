function absoluteValuesSumMinimization(param : number[]):number {
    const isEven = param.length %2 === 0;

    return isEven ? (param[param.length/2-1]) : (param[Math.floor(param.length/2)]);
}

console.log(absoluteValuesSumMinimization([2,4,7]))
console.log(absoluteValuesSumMinimization([2,4,7,8]))
console.log(absoluteValuesSumMinimization([2,5,7]))
console.log(absoluteValuesSumMinimization([2,4,6,7,10]))
