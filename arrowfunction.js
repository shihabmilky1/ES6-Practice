// function double(num) {
//     return num * 2;
// }

// const double = function(num){
//     return num * 2;
// } 

const double = num => num * 2;
//
const add = (a,b)=> a+b;
//
const give5 = () => 5;
//
const math = (x,y) => {
    const math =  x+ y; 
    const doMath =  x - y; 
    const result = math * doMath;
    return result;
};

const result = math(1,2);
const result3 = math(7,6);
const result2 = give5();
console.log(result3);