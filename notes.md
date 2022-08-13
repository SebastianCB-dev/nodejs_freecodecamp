## ¿Qué es NodeJS?
Entorno de ejecución de JavaScript orientado a eventos asíncronos.
- Ayuda a crear servidores (Backend)
- Nos ayuda a desarrollar aplicaciones escalables y de tiempo real.

Node no es:
- Lenguaje de programación
- Framework
- Librería (Biblioteca)
#### ¿Qué es un entorno de ejecución?
Entorno (infraestructura) en la cual se ejecuta un programa o aplicación.

#### ¿Qué es un evento asíncrono?
Evento que se ejecuta independientemente del proceso principal de la aplicación.
- No interrumpe el flujo de la aplicación principal
    * **Ejemplo**:
    1. Cuando se desea obtener información de una base de datos.

#### ¿Qué es un evento síncrono?
Evento que se ejecuta como parte del proceso principal de la aplicación.

### Características de NodeJS
- Open Source (Código abierto)
- Multiplataforma
- Basado en el motor V8 de Google (El mismo que ejecuta JS en el navegador). Motor V8 -> Motor de JS desarrollado por Chromium Project para Google Chrome

## Conceptos Básicos
**¿Que arquitectura usa NodeJS?**

R: Arquitectura Cliente-Servidor

La arquitectura Cliente-Servidor es un modelo en el cual el servidor envía recursos al dispositivo que los solicita (cliente).

**¿Qué es Desarrollo Front-end?**

R: Área del desarrollo web que se encarga del desarrollo de los componentes que ve el usuario y con los cuales interactúa. (Cliente)

**¿Qué es Desarrollo Back-end?**

R: Área del desarrollo web que se encarga del desarrollo de los servidores y bases de datos (Servidor)

**¿Qué es un protocolo?**

R: Conjunto de reglas que permiten que dos entidades de una red se comuniquen.
Ejemplo: Protocolo HTTP (HTTPS -> Más seguro)

**¿Qué es una base de datos?**

R: Conjunto de datos estructurados sobre un mismo contexto que se pueden consultar.

**¿Qué es un módulo?**

R: Funcionalidad organizada en uno o varios archivos JavaScript que puede ser reutilizada en una aplicación

### Aplicaciones de Node.JS
Node es usado para:
* Desarrollo Back-end (Servidores)
* Desarrollo de APIs

**¿Qué es una API (Application Programming Interface)?**

Un intermedario entre distintos programas.

### REPL de NodeJS
(Read, Eval, Print, Loop) -> Ciclo de leer, evaluar y mostrar
Entrar al entorno de NodeJS desde la terminal y ejecutar lineas de codigo de JS.
Ejecutar en la terminal:
```
node
```
Luego '.help' para ver que se puede hacer con REPL:
```
.help
```