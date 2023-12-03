let competidores = ["Pepe","Pepito","Manolo","Manolito","Jhon"];

const [ganador, segundo, ...restoCompetidores] = competidores;

console.log("El ganador es:", ganador);
console.log("El segundo lugar es:", segundo);
console.log("Los demás competidores son:", restoCompetidores);