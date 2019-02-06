function absoluteValuesSumMinimization( param : number[]) : number {
    console.log(param.length)
    if (param.length % 2 === 0) {
        return (param[param.length/2-1]);
    } else 
    {
        return(param[Math.floor(param.length/2]);
    }
    


    
    return 4
}

console.log(absoluteValuesSumMinimization([2,4,7]))
console.log(absoluteValuesSumMinimization([2,4,7,8]))
console.log(absoluteValuesSumMinimization([2,5,7]))
console.log(absoluteValuesSumMinimization([2,4,6,7,10]))
