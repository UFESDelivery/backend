require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const Produto = db.produto;

const app = express();
var corsOptions = {
    origin: `http://localhost:${process.env.CORS_PORT || 8081}`
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

let produtos = [
    {no_produto: 'VITAMINA DE ABACAXI', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE MORANGO', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE ABACAXI COM HORTELÃ', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE GRAVIOLA', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE CAJU', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE MARACUJÁ', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE GOIABA', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'VITAMINA DE MANGA', vl_unitario: 7.00, qt_estoque: 10},
    {no_produto: 'SUCO DE ABACAXI', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE MORANGO', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE ABACAXI COM HORTELÃ', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE GRAVIOLA', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE CAJU', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE MARACUJÁ', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE GOIABA', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE MANGA', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'SUCO DE ACEROLA', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'ÁGUA MINERAL', vl_unitario: 3.00, qt_estoque: 10},
    {no_produto: 'ÁGUA MINERAL COM GÁS', vl_unitario: 3.50, qt_estoque: 10},
    {no_produto: 'ÁGUA TÔNICA', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'REFRIGERANTE LATA', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'REFRIGERANTE 1,5L', vl_unitario: 10.00, qt_estoque: 10},
    {no_produto: 'REFRIGERANTE 2L', vl_unitario: 11.00, qt_estoque: 10},
    {no_produto: 'SWEEPS CITRUS', vl_unitario: 6.00, qt_estoque: 10},
    {no_produto: 'MISTO', vl_unitario: 9.00, qt_estoque: 10},
    {no_produto: 'MISTO EGG', vl_unitario: 12.00, qt_estoque: 10},
    {no_produto: 'MISTÃO', vl_unitario: 12.00, qt_estoque: 10},
    {no_produto: 'MISTO LIGHT', vl_unitario: 12.00, qt_estoque: 10},
    {no_produto: 'PORÇÃO DE FRITAS', vl_unitario: 19.50, qt_estoque: 10},
    {no_produto: 'PORÇÃO DE FRITAS COM CHEDDAR E BACON', vl_unitario: 14.50, qt_estoque: 10},
    {no_produto: 'PORÇÃO DE FRITAS COM COSTELA', vl_unitario: 16.50, qt_estoque: 10},
    {no_produto: 'PORÇÃO DE ANEL DE CEBOLA', vl_unitario: 8.00, qt_estoque: 10},
    {no_produto: 'PORÇÃO DE MINI CHICKEN', vl_unitario: 16.00, qt_estoque: 10},
    {no_produto: 'PORÇÃO DE MINI COXINHAS', vl_unitario: 16.00, qt_estoque: 10},
    {no_produto: 'FIRE BURGER', vl_unitario: 20.00, qt_estoque: 10},
    {no_produto: 'MAGNÍFICO', vl_unitario: 28.00, qt_estoque: 10},
    {no_produto: 'CALABRESA CRISPY', vl_unitario: 25.00, qt_estoque: 10},
    {no_produto: 'VIP BURGUER', vl_unitario: 25.00, qt_estoque: 10},
    {no_produto: 'PIG BURGUER', vl_unitario: 20.00, qt_estoque: 10}
];

db.sequelize.sync().then(async () => {
    // inserir os produtos
    console.log("inserindo produtos...");
    await Produto.bulkCreate(produtos);
    console.log("produtos inseridos com sucesso!");
});

// para dropar as tabelas e re-sincronizar o banco
// db.sequelize.sync({ force: true }).then(async () => {
//     console.log("Drop and re-sync db.");
//     console.log("inserindo produtos...");
//     await Produto.bulkCreate(produtos);
//     console.log("produtos inseridos com sucesso!");
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Bem-vindo ao UFES Delivery!" });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
