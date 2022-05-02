module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
        cd_cliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        no_cliente: {
            type: Sequelize.STRING(150),
            allowNull: false,
        }
    }, {
        createdAt: 'dt_criacao',
        updatedAt: 'dt_ultima_alteracao',
        freezeTableName: true
    });
    return Cliente;
};