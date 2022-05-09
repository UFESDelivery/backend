const db = require("../models");
const Pedido = db.produto;
const Op = db.Sequelize.Op;

exports.criar = (req, res) => {
     if (!req.body.cd_usuario) {
        res.status(400).send({
            message: "é necessário informar um usuario"
        });
        return;
    }

    const pedido = {
        cd_usuario: req.body.cd_usuario,
    };
 
    Pedido.create(pedido)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao criar o pedido"
            });
        });
};