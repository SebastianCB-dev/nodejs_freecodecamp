let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

console.log(infoCurso);
console.log(typeof infoCurso);


// Objeto -> String (JSON)
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

console.log(infoCursoJSON.titulo);

// Recibimos una cadena de caracteres(JSON) 
// y lo convertimos a un objeto de javascript
let infoCursoJSON2 = JSON.parse(infoCursoJSON);
console.log(infoCursoJSON2);