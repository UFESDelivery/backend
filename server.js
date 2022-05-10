require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const { estados, cidades, produtos } = require("./app/dump/dump.data.js");

const Produto = db.produto;
const Estado = db.estado;
const Cidade = db.cidade;
const Usuario = db.usuario;

const app = express();
var corsOptions = {
    origin: `http://localhost:${process.env.CORS_PORT || 8081}`
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(async () => {
    console.log("Conectado ao banco!");
});

// para dropar as tabelas e re-sincronizar o banco
// db.sequelize.sync({ force: true }).then(async () => {
//     console.log("Drop and re-sync db.");
//     console.log("inserindo estados...");
//     await Estado.bulkCreate(estados);

//     console.log("inserindo cidades...");
//     await Cidade.bulkCreate(cidades);

//     console.log("inserindo produtos...");
//     await Produto.bulkCreate(produtos);
    
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Bem-vindo ao UFES Delivery!" });
});

require("./app/routes/tutorial.routes")(app);

require("./app/routes/produto.routes")(app);

require("./app/routes/usuario.routes")(app);

require("./app/routes/pedido.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
