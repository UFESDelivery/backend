module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define("pedido", {
        cd_pedido: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cd_status: {
            type: Sequelize.ENUM,
            values: [
                'realizado', 
                'aguardando_confirmacao', 
                'confirmado', 'pronto_entrega', 
                'rota_entrega', 
                'entregue', 
                'cancelado_cliente', 
                'cancelado_estabelecimento',
                'reembolsado'
            ],
            defaultValue: 'realizado',
            allowNull: false
        },
        vl_total_impostos:  {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 0
        },
        vl_total_descontos:  {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 0
        },
        vl_total_compra:  {
            type: Sequelize.DOUBLE,
            allowNull: null,
            defaultValue: 0
        },
        vl_total_a_pagar: {
            type: Sequelize.VIRTUAL,
            get() {
                return `${this.vl_total_compra + this.vl_total_impostos - this.vl_total_descontos}`;
            },
            set(value) {
                throw new Error('Não é possível setar o valor de vl_total_a_pagar');
            }
        },
        dt_fim: {
            type: Sequelize.DATE,
            allowNull: true
        }

    }, {
        createdAt: 'dt_inicio',
        updatedAt: 'dt_ultima_alteracao',
        freezeTableName: true,
    });
    return Pedido;
};