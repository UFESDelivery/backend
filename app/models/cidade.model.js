module.exports = (sequelize, Sequelize) => {
    const Cidade = sequelize.define("cidade", {
        cd_cidade: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        no_cidade: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    return Cidade;
};