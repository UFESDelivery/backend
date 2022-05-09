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
db.estado = require("./estado.model.js")(sequelize, Sequelize);
db.cidade = require("./cidade.model.js")(sequelize, Sequelize);
db.endereco = require("./endereco.model.js")(sequelize, Sequelize);
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.produto = require("./produto.model.js")(sequelize, Sequelize);
db.pedido = require("./pedido.model.js")(sequelize, Sequelize);
db.itemPedido = require("./itemPedido.model.js")(sequelize, Sequelize);

// relacionamentos
// relacionar cidade e estado
db.estado.hasMany(db.cidade, { foreignKey: "cd_estado", as: "cidades" });
db.cidade.belongsTo(db.estado, { foreignKey: { name: "cd_estado", allowNull:false }, as: "estado", });

// relacionar cidade e endereco
db.cidade.hasMany(db.endereco, { foreignKey: "cd_cidade", as: "enderecos" });
db.endereco.belongsTo(db.cidade, { foreignKey: { name: "cd_cidade", allowNull:false }, as: "cidade", });

// relacionar usuario e endereco
db.endereco.hasMany(db.usuario, { foreignKey: "cd_endereco", as: "usuarios" });
db.usuario.belongsTo(db.endereco, { foreignKey: { name: "cd_endereco", allowNull:false }, as: "endereco" });

// relacionar usuario e pedido
db.usuario.hasMany(db.pedido, { foreignKey: "cd_usuario", as: "pedidos" });
db.pedido.belongsTo(db.usuario, { foreignKey: { name: "cd_usuario", allowNull:false }, as: "usuario", });

db.pedido.belongsToMany(db.produto, { through: 'itemPedido', foreignKey: 'cd_pedido' });
db.produto.belongsToMany(db.pedido, { through: 'itemPedido', foreignKey: 'cd_produto' });

module.exports = db;