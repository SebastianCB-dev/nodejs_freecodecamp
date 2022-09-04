/* Promesas */

const promesaCumplida = false;

console.log('Inicio del programa'); // 1

const miPromesa = new Promise((res, rej) => {
  setTimeout(() => {
    if (promesaCumplida) {
      res('Promesa cumplida');
    } else {
      rej('Promesa rechazada');
    }
  }, 3000)
});

miPromesa
  .then((value) => { console.log(value) },
    (error) => { console.log(error) });

console.log('Fin del programa'); // 2