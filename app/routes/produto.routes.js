module.exports = app => {
    const produto = require("../controllers/produto.controller.js");
    var router = require("express").Router();
  
    router.post("/novo", produto.criar);

    router.post("/buscar/periodo", produto.buscarPeriodo);

    router.get("/buscar", produto.buscarTodos);

    router.get("/buscar/:id", produto.buscarUm);

    app.use('/api/produtos', router);
};