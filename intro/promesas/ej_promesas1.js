const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  return estatus;
}

const miPedido = new Promise((res, rej) => {
  setTimeout(() => {
    if (estatusPedido()) {
      res('Pedido recibido, su pizza esta en camino.');
    }
    else {
      rej('Pedido no recibido, revise su conexión a internet.');
    }
  }, 3000);
});

miPedido.then((msg) => { console.log(msg) })
  .catch((err) => { console.log(err) });
