// Modulo OS
// Autor: @sebastiancb29
// Contiene funcionalidad para obtener información sobre el sistema operativo en el cual se ejecuta la aplicación.

const os = require('os');

console.log(os.type()); // Muestra en la consola el tipo de sistema operativo

console.log(os.homedir()); // Muestra en la consola la ruta de la carpeta home del usuario
console.log(os.uptime()); // Muestra en la consola el tiempo de actividad del sistema
console.log(os.userInfo()); // Muestra en la consola la información del usuario