
let a = prompt('Enter first number');
let b = prompt('Enter second number');


function sum(){
    let sum = a + b;
    return sum;
}
function sub(){
    let sub = a - b;
    return sub;
}
function div(){
    let div = a / b;
    div = div.toFixed(2);
    return div;
}
function multi(){
    let multi = a * b;
    return multi;
}


// export default sum;
export {sum, sub,multi, div};