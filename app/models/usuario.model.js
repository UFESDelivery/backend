module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        cd_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cd_token: {
            type: Sequelize.CHAR(64),
            allowNull: true,
        },
        cd_tipo_usuario: {
            type: Sequelize.ENUM,
            values: [
                'Cliente', 
                'Funcionário',
                'Gerente'
            ],
            defaultValue: 'Cliente',
            allowNull: false
        },
        ds_email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
        },
        no_usuario: {
            type: Sequelize.STRING(150),
            allowNull: false,
        }
    }, {
        createdAt: 'dt_criacao',
        updatedAt: 'dt_ultima_alteracao',
        freezeTableName: true
    });

    return Usuario;
};