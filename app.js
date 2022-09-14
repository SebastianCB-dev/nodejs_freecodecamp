const express = require('express');
const {infoCursos} = require('./routing/cursos');

const app = express();

app.get('/', (_, res) => {
  res.send({ data: 'Server 👀'});
});

app.get('/api/courses', (_, res) => {
  res.send(infoCursos);
});

app.get('/api/courses/programacion', (_, res) => {
  res.send(infoCursos['programacion']);
});

app.get('/api/courses/matematicas', (_, res) => {
  res.send(infoCursos['matematicas']);
});

// Un parametro
app.get('/api/courses/programacion/:lang', (req, res) => {
  const language = req.params.lang;
  const result = infoCursos['programacion']
                    .filter(course => course.lenguaje.toLowerCase() === language.toLowerCase());
  if(result.length === 0) {
    return res.status(404).send({msg: 'Error no se encontró el curso.'});
  }
  res.send({data: result}); 
});

app.get('/api/courses/matematicas/:math', (req, res) => {
  const math = req.params.math;
  const result = infoCursos['matematicas']
                  .filter(course => course.lenguaje.toLowerCase() === math.toLowerCase());
  if(result.length === 0) {
    return res.status(404).send({ msg: 'Error no se encontró el curso.' });
  }
  res.send({ msg: 'ok', data: result });
});

// Dos parametros
app.get('/api/courses/programacion/:lang/:level', (req, res) => {
  // Parametros de ruta (Params)
  const language = req.params.lang.trim();
  const level = req.params.level.trim();
  // Parametros de busqueda (Query)
  const sort_ = req.query.sort;
  const order = req.query.order;
  
  const results = infoCursos['programacion'].filter(course => course.lenguaje.toLowerCase() === language.toLowerCase() && course.nivel.toLowerCase() === level.toLowerCase());

  if(sort_ in Object.keys(infoCursos)) {
    results.sort((a, b) => a[sort_] < b[sort_]);
  }
  

  if (results.length === 0) {
    return res.status(404).send({ msg: 'Error no se encontró el curso.' });
  }
  res.send({ msg: 'ok', data: results });
});

const PORT = process.env.PORT || 9999; 

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});