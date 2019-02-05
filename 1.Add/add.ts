function add (num1 : number, num2 : number):number {
    return num1 + num2;
}

var sum = add(15,10);
console.log(sum)

// *** Multiple Paramaters

function add2 (...param : number[]):number {
    console.log(param)
    let total = 0;
    for (var i = 0; i < param.length; i++){
        total += param[i];
    }
    return total;
}

function add3 (... param : number[]): number {
    let total = 0;
    param.forEach((num) => {
        total += num;
    });
    return total;
}

console.log(add2(10,20,30,40,50))
console.log(add3(10,20))