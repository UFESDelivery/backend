module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define("produto", {
        cd_produto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        no_produto: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        vl_unitario: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        qt_estoque: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }

    }, {
        createdAt: 'dt_criacao',
        updatedAt: 'dt_ultima_alteracao',
        freezeTableName: true,
    });
    return Produto;
};