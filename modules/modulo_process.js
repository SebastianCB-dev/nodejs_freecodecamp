// Modulo process
// Autor: @sebastiancb29
// Provee información sobre el proceso actual de NodeJS que se está ejecutando.

console.log(process.env) // Muestra en la consola la información de las variables de entorno

// node app.js 6 7 
// [node, app.js, 6, 7]
//    0    1      2  3

console.log(process.argv); // Muestra en la consola la información de los argumentos de la línea de comandos
console.log(process.argv[2]);
console.log(process.argv[3]);

// Recorrer todos los argumentos de la línea de comandos
for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

console.log(process.memoryUsage()); // Muestra en la consola la información de la memoria
