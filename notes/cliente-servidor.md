# Modelo cliente-servidor
Modelo para acceder a internet y obtener recursos e información

### Cliente
El navegador desde el cual se realizan solicitudes a un servidor. (El que solicita el recurso)

### Servidor
Programa que se ejecuta en un servidor físico para ofrecer un servicio al cliente. (El que envia el recurso)

## Solicitud HTTP (Request):
Contiene:
* Métodos HTTP (Get, Post, Put, Delete)
* Camino (Path)  -> Ruta /api/usuario
* Versión de HTTP
* Cabeceras (headers) -> Proveen información adicional sobre la solicitud
* Cuerpo (Body) -> Contiene la información que debe ser enviada al servidor. Solo se envian en solicitudes como POST, PUT

### Metodos HTTP
Verbos HTTP:
* Get -> Obtener -> Obtener un recurso del servidor -> Solicitar un recurso especifico.
* Post -> Exponer ->  Para crear un recurso en especifico -> Como por ejemplo un usuario en la BD
* Put -> Colocar -> Para modificar un recurso -> Hacer un cambio en la BD.
* Delete -> Eliminar -> Eliminar un recurso del servidor -> Ejemplo eliminar un usuario en la BD

## Respuesta HTTP (Response):
Contiene:
* Código de estado
* Texto de estado
* Versión de HTTP
* Cabeceras (headers) -> Opcional -> Proveen información adicional sobre la respuesta.
* Cuerpo (body) -> Contiene la información que debe ser enviada desde el servidor hacia el cliente.

### Codigos de estado HTTP
Sirve para saber ¿Qúe paso? con la solicitud
Numero que indica si se ha completado exitosamente la solicitud HTTP o no.

##### Categorías
1. Respuestas informativas (100-199)
2. Respuestas satisfactorias (200-299)
3. Redirecciones (300-399)
4. Errores del cliente (400-499)
5. Errores del servidor (500-599)