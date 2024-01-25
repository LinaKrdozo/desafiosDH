// Ejemplo de matriz tridimensional
const matrizTridimensional = [
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [7, 8, 9],
      [10, 11, 12]
    ]
  ];
  
  // Función para recorrer la matriz tridimensional
  function recorrerMatrizTridimensional(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        for (let k = 0; k < matriz[i][j].length; k++) {
          console.log(`matriz[${i}][${j}][${k}] = ${matriz[i][j][k]}`);
        }
      }
    }
  }
  
  // Llamar a la función

  console.log(matrizTridimensional)
  recorrerMatrizTridimensional(matrizTridimensional);