const db = require("../models");
const Usuario = db.usuario;
const Cidade = db.cidade;
const Op = db.Sequelize.Op;

exports.criar = (req, res) => {
    const { cd_cidade } = req.body.endereco;
    
    // verificar se a cidade existe
    Cidade.findByPk(cd_cidade)
    .then(cidade => {
        if(cidade){
            // pegar os dados do usuario pelo body
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
            Usuario.create(dadosUsuario)
            .then(usuario => {
                // criar o endereco do usuario e atribuir as chaves
                usuario.createEndereco(dadosUsuario.endereco)
                .then(endereco => {
                    return res.send({ message: "Usuario criado com sucesso!" });
                });
            });
            
        } else {
            res.status(404).send({
                message: `cidade não encontrada!`
            });
        }
        
    })
    .catch(err => {
        return res.status(500).send(err);
    });

};