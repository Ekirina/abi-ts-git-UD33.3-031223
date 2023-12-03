const mostrarReceta = (recetas) => {
    for (const receta of recetas) {
        const {nombre, tiempo, ingredientes } = receta;
        console.log(nombre);
        console.log(tiempo);
        for (const ingrediente of ingredientes) {
            console.log('•', ingrediente);
        }
    }
}

const recetas = [
  {
    nombre: 'Galletas de plátano y chocolate',
    tiempoPreparacion: '30 minutos',
    ingredientes: ['plátano', 'azúcar', 'harina', 'mantequilla', 'pepitas de chocolate'],
  },
  {
    nombre: 'Porrusalda',
    tiempoPreparacion: '1 hora',
    ingredientes: ['puerro', 'agua', 'sal', 'patata', 'aceite'],
  },
  {
    nombre: 'Libritos de lomo',
    tiempoPreparacion: '30 minutos',
    ingredientes: ['lomo fileteado', 'queso', 'jamón cocido', 'sal', 'huevo', 'pan rallado'],
  },
];

mostrarReceta(recetas)