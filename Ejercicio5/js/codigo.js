let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const join = (a,b) => {
    let newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray[i+i] = a[i];
        newArray[i+i+1] = b[i];
    }
    console.log(newArray);
};

join(array1,array2);