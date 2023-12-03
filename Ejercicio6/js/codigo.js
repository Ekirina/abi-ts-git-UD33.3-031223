let a = [1,2,3,4,5,6,7,8,9,10];
let impar = [];
let par = [];
const array = (matriz) => {
    for (const i of matriz) {
        if(i % 2 == 0) par.push(i);
        else impar.push(i);
    }
};

array(a)
console.log(impar.concat(par));