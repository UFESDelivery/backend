module.exports = app => {
    const pedido = require("../controllers/pedido.controller.js");
    var router = require("express").Router();
  
    router.post("/", pedido.criar);

    app.use('/api/pedidos', router);
};