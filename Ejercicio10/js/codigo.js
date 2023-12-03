const nombreCompleto = ({ nombre, apellidos }) => {
    return `${nombre} ${apellidos}`;
  };
  
  const persona = {
    nombre: 'Sergio',
    apellidos: 'Roche',
    edad: 38,
    direccion: 'en una',
    ciudad: 'Reus',
    pais: 'España',
  };
  
  console.log(nombreCompleto(persona));