const db = require("../models");
const Pedido = db.pedido;
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.criar = async (req, res) => {
    try {
        if (!req.body.cd_usuario) throw {
            status: 400,
            message: "é necessário informar um cliente"
        }

        const dadosPedido = {
            cd_usuario: req.body.cd_usuario,
        };

        const usuario = await Usuario.findOne({ 
            where: { 
                cd_usuario: dadosPedido.cd_usuario, 
                cd_tipo_usuario: "Cliente",
            } 
        });

        if (!usuario) throw { status: 404, message: "Cliente não encontrado" };

        const pedido = await Pedido.create(dadosPedido);

        res.send(pedido);

    } catch (err) {
        return res.status(err.status || 500).send(err.message || err);
    }
};