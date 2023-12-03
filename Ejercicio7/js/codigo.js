const loscinco = (numArray) => {
const newNumArray = [];
  
    for (const numeros of numArray) {
      if (numeros > 5) {
        newNumArray.push(numeros);
      }
    }
  
    return newNumArray;
  };
  
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const array = loscinco(numArray);
  
  console.log(array);