const nombre = (containerArray) => {
    for (const objeto of containerArray) {
      const nombre = objeto.nombre;
      console.log(nombre);
    }
  };
  
  const containerArray = [
    {
      nombre: 'Sergio',
      apellidos: 'Roche',
      edad: 38,
      direccion: 'en una',
      ciudad: 'Reus',
      pais: 'España',
    },
    {
      nombre: 'Pikachu',
      apellidos: 'Elec',
      edad: 65,
      direccion: 'Pueblo Paleta',
      ciudad: 'Kanto',
      pais: 'Japón',
    },
    {
      nombre: 'Jiraiya',
      apellidos: 'Ero-Sennin',
      edad: 54,
      direccion: 'Aguas Termales',
      ciudad: 'Konoha',
      pais: 'Fuego',
    },
  ];
  
  const nombreCompletoArray = nombre(containerArray);