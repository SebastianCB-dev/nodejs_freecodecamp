// Modulo Timer
// Autor: @sebastiancb29
// Provee funcionalidad para crear un temporizador que se ejecuta cada cierto tiempo.
// Contiene funciones que ejecutan una función cada cierto tiempo.

// setTimeout = Función que ejecuta una función en un cierto tiempo.
// setInterval = Función que ejecuta una función cada cierto tiempo.
// clearTimeout = Función que detiene el temporizador.
// clearInterval = Función que detiene el temporizador.
// setImmediate = Función que ejecuta una función inmediatamente.
// 1 segundo = 1000 milisegundos

// * setTimeout(función, milisegundos, parametro1, parametro2));

function mostrarTema(tema) {
  console.log(`Esto aprendiendo ${tema}`);
}

function sumar(a, b) {
  console.log(a + b);
}

console.log('Arranca el programa');
setTimeout(mostrarTema, 5000, 'NodeJS');
setTimeout(sumar, 2000, 3, 5);


//* setImmediate()
// Para ejecutar una función inmediatamente.
// setImmediate(función, parametro1, parametro2);
// Se ejecutará cuando el event loop esté vacío.

setImmediate(mostrarTema, 'NodeJS'); // Se ejecuta inmediatamente despúes del codigo sincrono
console.log('Termina el programa');

//* setInterval()
// Para ejecutar una función cada cierto tiempo indefinidamente.
// setInterval(función, milisegundos, parametro1, parametro2);

setInterval(mostrarTema, 1000, 'NodeJS'); // Se ejecuta cada 1 segundo
