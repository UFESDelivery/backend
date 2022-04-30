--------------------------------------------------------------------------------

-- INSERTS --

INSERT INTO cliente (
    no_cliente
)
VALUES
    ()
;

INSERT INTO desconto (
    cd_cliente
    , ds_desconto
    , qt_usos
    , qt_max_usos
    -- , dt_inicio
    -- , dt_fim
)
VALUES
    ()
;

INSERT INTO pedido (
    cd_cliente
    , cd_status
    , vl_total_impostos
    , vl_total_compra
    , vl_total_descontos
    , vl_total_a_pagar
    -- , dt_ultima_alteracao
    -- , dt_inicio
    -- , dt_fim
)
VALUES
    ()
;

INSERT INTO aplicacao_desconto (
    cd_desconto
    , cd_pedido
)
VALUES
    ()
;

INSERT INTO imposto (
    no_imposto
    , vl_percentual
)
VALUES
    ()
;

INSERT INTO aplicacao_imposto (
    cd_imposto
    , cd_pedido
    , vl_total
)
VALUES
    ()
;

INSERT INTO produto (
    no_produto
    , vl_unitario
    , qt_estoque
    -- , dt_ultima_alteracao
    -- , dt_criacao
)
VALUES
    ()
;

INSERT INTO item_pedido (
    cd_produto
    , qt_itens
    , vl_unitario
    , vl_total
)
VALUES
    ()
;
