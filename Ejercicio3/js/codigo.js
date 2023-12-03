const javascript1 = ['DOM', 'BOM', 'Funciones', 'Arrays'];
console.log(javascript1);

javascript1.splice(javascript1.indexOf('DOM'), 1, 'Objetos');
javascript1.splice(javascript1.indexOf('Arrays'), 1, 'ArraysDifíciles');

const dosElements = javascript1.slice(-2);
const posicion = javascript1.indexOf("Funciones");


console.log('Cambios de DOM por Objetos y Arrays por ArraysDifíciles:', javascript1);
console.log('Copia e inclusión de los dos ultimos elementos:', dosElements);
console.log('El elemento Funciones esta en la posicion:', posicion);