module.exports = (sequelize, Sequelize) => {
    const Estado = sequelize.define("estado", {
        cd_estado: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cd_uf: {
            type: Sequelize.CHAR(2),
            unique: true,
            allowNull: false,
        },
        ds_estado: {
            type: Sequelize.STRING(100),
            allowNull: false,
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    return Estado;
};