function add (num1 : number, num2 : number):number {
    return num1 + num2;
}

var sum = add(15,10);
console.log(sum)

// *** Multiple Paramaters

function add2 (...param : number[]):number {
    console.log(param)

    return 10;
}

console.log(add2(10,20,30,40))