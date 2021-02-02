const  firstName = 'solid';
const lastName = 'mama';

const fullName = `${firstName} ${lastName} i am the leader`;
console.log(fullName);

function name(num1,num2) {
    if(num2 == undefined){
        num2 =10
    }
    return num1 + num2;
};
const result = name(12);
console.log(result);
const doubleIt= (x) => x * 2;
console.log(doubleIt);