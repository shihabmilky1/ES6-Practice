function name(num1,num2) {
    if (num2 == undefined){
        num2 = 20;
    }
    return num1 + num2; 
}
const result = name(12,18);
console.log(result);