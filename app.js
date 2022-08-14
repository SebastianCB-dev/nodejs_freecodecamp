// Module fs (file system)
// Author: @sebastiancb29
// Provee funcionalidad para leer y escribir archivos.

// Operaciones útiles:
// Leer archivos
// Modificar archivos
// Eliminar archivos
// Crear archivos
// Renombrar archivos
// Copiar archivos
// Mover archivos
// Obtener información de archivos
// Obtener información de directorios
// Obtener información de sistema

// Todos los metodos de fs son asincronos
// Pero pueden ser sincronos con el método sync
// Ejemplo de rename:
// fs.rename('archivo1.txt', 'archivo2.txt', (err) => {});
// fs.renameSync('archivo1.txt', 'archivo2.txt');

const fs = require('fs');

function readFile(path) {
  return fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }); // Lee un archivo y devuelve un buffer
}

function renameFile(newPath, oldPath) {
  fs.rename(newPath, oldPath, (err) => {
    if (err) {
      throw err;
    }
    console.log('Archivo renombrado');
  })
}

function agregarContenidoAlFinal(path, text) {
  fs.appendFile(path, text, (err) => {
    if (err) {
      throw err;
    }
    console.log('Contenido agregado');
  });
}

function reemplazarContenidoArchivo(path, text) {
  fs.writeFile(path, text, (err) => {
    if (err) {
      throw err;
    }
    console.log('Contenido reemplazado');
  });
}

function eliminarArchivo(path) {
  fs.unlink(path, (err) => {
    if(err) {
      throw err;
    }
    console.log('Archivo eliminado');
  });
}

// renameFile('./assets/index.html', './assets/home.html');
// agregarContenidoAlFinal('./assets/index.html', '<h1>Hola, Mundo!</h1>');
// reemplazarContenidoArchivo('./assets/index.html', '<h1>Hola, Mundo!</h1>');
eliminarArchivo('./assets/index2.html');
