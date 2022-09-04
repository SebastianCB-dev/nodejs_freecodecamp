function ordenarProducto(producto) {
  return new Promise((res, rej) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp`);
    setTimeout(() => {
      if (producto === 'taza') {
        res('Ordenando una taza con el logo de freeCodeCamp...');
      } else {
        rej('Este producto no está disponible actualmente');
      }
    }, 2000);
  });
}

function procesarProducto(respuesta) {
  return new Promise((res) => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      res('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000);
  });
}

// ordenarProducto('taza')
//   .then(msg => {
//     console.log('Taza ordenada...');
//     return procesarProducto(msg);
//   })
//   .then(msg => {
//     console.log(msg);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// Promise.all([ordenarProducto('taza'), ordenarProducto('platano')])

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log(respuesta);
    const respuestaProcesada = await procesarProducto(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log('Error: ', err);
  }
}

realizarPedido('taza');