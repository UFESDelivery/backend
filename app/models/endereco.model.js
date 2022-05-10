module.exports = (sequelize, Sequelize) => {
    const Endereco = sequelize.define("endereco", {
        cd_endereco: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        no_logradouro: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        no_bairro: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        ds_numero: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        ds_cep: {
            type: Sequelize.CHAR(8),
            allowNull: false,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    return Endereco;
};