/*
  Modulo events:
    - on: para adicionar un evento a um elemento
*/
const EventEmmiter = require('events');

const emisorProductos = new EventEmmiter();

emisorProductos.on('compra', (valor) => {
  console.log(`Se ha realizado una compra por un total de: ${valor}`);
});
emisorProductos.on('venta', () => {
  console.log('Se ha realizado una venta');
});

emisorProductos.emit('compra', 100);
