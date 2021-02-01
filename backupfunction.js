function name(num1,num2) {
    if (num2 == undefined){
        num2 = 20;
    }
    return num1 + num2; 
}
const result = name(12);
console.log(result);
function name1(num1,num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const result1 = name1(18);
console.log(result1);

function name2(num1,num2=0) {
    return num1 + num2;
}
const result2 = name2(1);
console.log(result2);