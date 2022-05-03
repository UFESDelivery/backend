const db = require("../models");
const Produto = db.produto;
const Op = db.Sequelize.Op;

// exports.buscarTodos = (req, res) => {
//     const nome = req.query.nome;
//     var filtro = nome ? { no_produto: { [Op.like]: `%${nome}%` } } : null;
//     Produto.findAll({
//         where: filtro, 
//         attributes: [
//             'no_produto',
//             'vl_unitario',
//             'qt_estoque'
//         ]
//     })
//     .then(data => {
//         res.send(data);
//     })
//     .catch(err => {
//         res.status(500).send({
//             message:
//                 err.message || "Não foi possível buscar os produtos"
//         });
//     });
// };