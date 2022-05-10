const db = require("../models");
const Usuario = db.usuario;
const Cidade = db.cidade;
const Op = db.Sequelize.Op;

exports.criar = async (req, res) => {
    try {
        const { cd_cidade } = req.body.endereco;

        // verificar se o email ja esta cadastrado
        const usuarioExistente = await Usuario.findOne({ where: { ds_email: req.body.ds_email }});

        if(usuarioExistente) throw { status: 400, message: "Este email já está cadastrado!"};

        // verificar se a cidade existe
        if((await Cidade.findByPk(cd_cidade))) {

            const dadosUsuario = {
                no_usuario: req.body.no_usuario,
                ds_email: req.body.ds_email,
                endereco: {
                    no_logradouro: req.body.endereco.no_logradouro,
                    no_bairro: req.body.endereco.no_bairro,
                    ds_numero: req.body.endereco.ds_numero,
                    ds_cep: req.body.endereco.ds_cep,
                    cd_cidade
                }

            };

            // criar usuario
            const usuarioCriado = await Usuario.create(dadosUsuario, {
                include: [{
                    model: db.endereco,
                    as: 'endereco' // mesmo nome do alias
                }]
            })
            
            return res.send(usuarioCriado);

        } else {
            throw { status: 404, message: "Cidade não encontrada!" }
        }

    } catch(err) {
        return res.status(err.status || 500).send(err.message || err);
    }

};