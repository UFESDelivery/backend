const db = require("../models");
const Produto = db.produto;
const Op = db.Sequelize.Op;

function validarProduto(produto, res){
    if(!produto.no_produto || !produto.vl_unitario || !produto.qt_estoque) {
        res.status(500).send({
            message: "Há informações faltando"
        });
        return false;
    }
    if(produto.no_produto.length <= 2){
        res.status(500).send({
            message: "nome inválido"
        });
        return false;
    }
    if(produto.vl_unitario < 0){
        res.status(500).send({
            message: "valor inválido"
        });
        return false;
    }
    if(produto.qt_estoque < 0){
        res.status(500).send({
            message: "estoque inválido"
        });
        return false;
    }
    return true;
}

exports.criar = (req, res) => {
    if(validarProduto(req.body, res)){
        const produto = Object.assign({}, {
            no_produto: req.body.no_produto,
            vl_unitario: req.body.vl_unitario,
            qt_estoque: req.body.qt_estoque
        });
        Produto.create(produto)
        .then(prod => {
            return res.send(prod);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Falha ao inserir produto"
            });
        });
    }
};

exports.buscarTodos = (req, res) => {
    const nome = req.query.nome;
    
    var filtro = nome ? { no_produto: { [Op.like]: `%${nome}%` } } : null;
    Produto.findAll({
        where: filtro, 
        attributes: [
            'no_produto',
            'vl_unitario',
            'qt_estoque'
        ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Não foi possível buscar os produtos"
        });
    });
};

exports.buscarUm = (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Não foi possivel encontrar um produto com id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao encontrar produto com id=" + id
        });
    });
};

exports.buscarPeriodo = (req, res) => {
    const { data1, data2 } = req.body;
    if(!data1){
        return res.status(500).send({
            message: "parametros incorretos"
        });
    }

    ['dia', 'mes', 'ano'].forEach(val => {
        if(!Object.keys(data1).includes(val)) {
            return res.status(500).send({
                message: "parametros incorretos"
            });
        }
    });

    const data_2 = data2 ? data2 : Date.now();

    const where = {
        "dt_criacao": {
          [Op.and]: {
            [Op.gte]: new Date(data1.ano, data1.mes-1, data1.dia),
            [Op.lte]: new Date(data_2.ano, data_2.mes-1, data_2.dia)
          }
        }
    }

    Produto.findAll({
        where, 
        attributes: [
            'no_produto',
            'vl_unitario',
            'qt_estoque'
        ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Não foi possível buscar os produtos"
        });
    });

}