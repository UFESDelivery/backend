const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: dbConfig.logging,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.produto = require("./produto.model.js")(sequelize, Sequelize);
db.pedido = require("./pedido.model.js")(sequelize, Sequelize);
db.itemPedido = require("./itemPedido.model.js")(sequelize, Sequelize);

// relacionamentos
db.cliente.hasMany(db.pedido, { foreignKey: "cd_cliente" });

db.pedido.belongsToMany(db.produto, { through: 'itemPedido', foreignKey: 'cd_pedido' });
db.produto.belongsToMany(db.pedido, { through: 'itemPedido', foreignKey: 'cd_produto' });

module.exports = db;