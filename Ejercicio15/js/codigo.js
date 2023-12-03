class Receta {
    constructor(nombre, tiempo, ingredientes) {
      this.nombre = nombre;
      this.tiempo = tiempo;
      this.ingredientes = ingredientes;
    }
  }
  
  const mostrarReceta = (recetas) => {
    for (const receta of recetas) {
      const { nombre, tiempo, ingredientes } = receta;
      console.log(nombre);
      console.log(tiempo);
      for (const ingrediente of ingredientes) {
        console.log('•', ingrediente);
      }
    }
  };
  
  const galletaPlatano = new Receta('Galletas de plátano y chocolate', '30 minutos', [
    'plátano',
    'azúcar',
    'harina',
    'mantequilla',
    'pepitas de chocolate',
  ]);
  
  const porrusalda = new Receta('Porrusalda', '1 hora', [
    'puerro',
    'agua',
    'sal',
    'patata',
    'aceite',
  ]);
  
  const libritos = new Receta('Libritos de lomo', '30 minutos', [
    'lomo fileteado',
    'queso',
    'jamón cocido',
    'sal',
    'huevo',
    'pan rallado',
  ]);
  
  const recetas = [galletaPlatano, porrusalda, libritos];
  
  mostrarReceta(recetas);