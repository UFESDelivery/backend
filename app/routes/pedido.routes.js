module.exports = app => {
    const pedido = require("../controllers/pedido.controller.js");
    var router = require("express").Router();
  
    //router.get("/", pedido.buscarTodos);

    app.use('/api/pedidos', router);
};