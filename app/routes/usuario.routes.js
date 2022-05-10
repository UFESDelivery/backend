module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
    var router = require("express").Router();
  
    router.post("/", usuario.criar);

    app.use('/api/usuarios', router);
};