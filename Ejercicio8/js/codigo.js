let array1 = ["DOM", "BOM", "Funciones", "Arrays"];
let array2 = ["Objetos", "Arrays", "ParseInt"];

const arrays = (a,b) => {
    i = 0;
    for (let index = 0; index < a.length; index++) {
        while(i < b.length){
            if(a[index] === b[i]) console.log(a[index]);
            i++;
        }
        i=0;
    }   
}

arrays(array1,array2);