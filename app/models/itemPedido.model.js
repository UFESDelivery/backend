module.exports = (sequelize, Sequelize) => {
    const ItemPedido = sequelize.define("itemPedido", {
        cd_pedido: {
            type: Sequelize.INTEGER,
            references: {
                model: 'pedido',
                key: 'cd_pedido'
            }
        },
        cd_produto: {
            type: Sequelize.INTEGER,
            references: {
                model: 'produto',
                key: 'cd_produto'
            }
        },
        qt_itens: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        vl_unitario: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'item_pedido'
    });
    return ItemPedido;
};