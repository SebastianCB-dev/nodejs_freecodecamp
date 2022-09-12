const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
  const {method} = req; 

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res); // Return or break
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo ${method} no puede ser manejado por el servidor.`);
  }
});


function manejarSolicitudGET(req, res) {
  const path = req.url;
  
  if(path === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.statusCode = 200;
    res.end(JSON.stringify({msg: 'Bienvenidos a mi primer servidor y API creados con Node.JS'}));
  } 
  else if(path === '/api/cursos') {
    res.statusCode = 200;
    res.end(JSON.stringify(cursos.infoCursos));
  } 
  else if(path === '/api/cursos/programacion') {
    // 200 OK viene por defecto en todas las peticiones
    res.statusCode = 200;
    res.end(JSON.stringify(cursos.infoCursos['programacion']));
  }
  else if (path === '/api/cursos/matematicas') {
    res.statusCode = 200;
    res.end(JSON.stringify(cursos.infoCursos['matematicas']));
  }
  else {
    res.statusCode = 404;
    res.end('El recurso solicitado no existe.');
  }
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if(path === '/api/cursos/programacion') {
    res.statusCode = 200;
    res.end('El servidor recibio una solicitud POST para /cursos/programacion')
  }
  else {
    res.statusCode = 404;
    res.end('El recurso solicitado no existe.');
  }
}

const PORT = 9999;
servidor.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
