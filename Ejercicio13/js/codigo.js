const receta = {
    nombre: 'Galletas de plátano y chocolate',
    tiempo: '30 minutos',
    ingredientes: ['plátano', 'azúcar', 'harina', 'mantequilla', 'pepitas de chocolate'],
  };
  
  const mostrarReceta = ({ nombre, tiempo, ingredientes }) => {
      console.log(nombre);
      console.log(tiempo);
      for (const ingrediente of ingredientes) {
          console.log("ingrediente: "+ ingrediente);
      }
  }
  
  mostrarReceta(receta);