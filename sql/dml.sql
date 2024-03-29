--------------------------------------------------------------------------------

-- INSERTS --

INSERT INTO estado (
    ds_estado
    , cd_uf
)
VALUES
    ('ACRE', 'AC')
    , ('ALAGOAS', 'AL')
    , ('AMAPÁ', 'AP')
    , ('AMAZONAS', 'AM')
    , ('BAHIA', 'BA')
    , ('CEARÁ', 'CE')
    , ('DISTRITO FEDERAL', 'DF')
    , ('ESPÍRITO SANTO', 'ES')
    , ('GOIÁS', 'GO')
    , ('MARANHÃO', 'MA')
    , ('MATO GROSSO', 'MT')
    , ('MATO GROSSO DO SUL', 'MS')
    , ('MINAS GERAIS', 'MG')
    , ('PARÁ', 'PA')
    , ('PARAÍBA', 'PB')
    , ('PARANÁ', 'PR')
    , ('PERNAMBUCO', 'PE')
    , ('PIAUÍ', 'PI')
    , ('RIO DE JANEIRO', 'RJ')
    , ('RIO GRANDE DO NORTE', 'RN')
    , ('RIO GRANDE DO SUL', 'RS')
    , ('RONDÔNIA', 'RO')
    , ('RORAIMA', 'RR')
    , ('SANTA CATARINA', 'SC')
    , ('SÃO PAULO', 'SP')
    , ('SERGIPE', 'SE')
    , ('TOCANTINS', 'TO')
;

INSERT INTO cidade (
    cd_estado
    , no_cidade
)
VALUES
    ()
;

INSERT INTO endereco (
    cd_cidade
    , ds_email
    , no_logradouro
    , no_bairro
    , ds_numero
    , nu_cep
)
VALUES
    ()
;

INSERT INTO usuario (
    cd_endereco
    , cd_token
    , cd_tipo_usuario
    , no_usuario
    , ds_email
)
VALUES
    (NULL, NULL, 4, 'ADM', 'ADM@UFESDELIVERY.COM.BR')
;

INSERT INTO desconto (
    cd_cliente
    , ds_desconto
    , qt_usos
    , qt_max_usos
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
)
VALUES
    -- VITAMINAS
    ('VITAMINA DE ABACAXI', 7.00, 10)
    , ('VITAMINA DE MORANGO', 7.00, 10)
    , ('VITAMINA DE ABACAXI COM HORTELÃ', 7.00, 10)
    , ('VITAMINA DE GRAVIOLA', 7.00, 10)
    , ('VITAMINA DE CAJU', 7.00, 10)
    , ('VITAMINA DE MARACUJÁ', 7.00, 10)
    , ('VITAMINA DE GOIABA', 7.00, 0)
    , ('VITAMINA DE MANGA', 7.00, 10)
    , ('VITAMINA DE ACEROLA', 7.00, 10)
    -- SUCOS
    , ('SUCO DE ABACAXI', 6.00, 10)
    , ('SUCO DE MORANGO', 6.00, 10)
    , ('SUCO DE ABACAXI COM HORTELÃ', 6.00, 10)
    , ('SUCO DE GRAVIOLA', 6.00, 10)
    , ('SUCO DE CAJU', 6.00, 10)
    , ('SUCO DE MARACUJÁ', 6.00, 10)
    , ('SUCO DE GOIABA', 6.00, 10)
    , ('SUCO DE MANGA', 6.00, 10)
    , ('SUCO DE ACEROLA', 6.00, 10)
    -- BEBIDAS
    , ('ÁGUA MINERAL', 3.00, 10)
    , ('ÁGUA MINERAL COM GÁS', 3.50, 10)
    , ('ÁGUA TÔNICA', 6.00, 10)
    , ('REFRIGERANTE LATA', 6.00, 10)
    , ('REFRIGERANTE 1,5L', 10.00, 10)
    , ('REFRIGERANTE 2L', 11.00, 10)
    , ('SWEEPS CITRUS', 6.00, 10)
    -- MISTOS
    , ('MISTO', 9.00, 10)
    , ('MISTO EGG', 12.00, 10)
    , ('MISTÃO', 12.00, 10)
    , ('MISTO LIGHT', 12.00, 10)
    -- PORÇÕES
    , ('PORÇÃO DE FRITAS', 19.50, 10)
    , ('PORÇÃO DE FRITAS COM CHEDDAR E BACON', 14.50, 10)
    , ('PORÇÃO DE FRITAS COM COSTELA', 16.50, 10)
    , ('PORÇÃO DE ANEL DE CEBOLA', 18.00, 10)
    , ('PORÇÃO DE MINI CHICKEN', 16.00, 10)
    , ('PORÇÃO DE MINI COXINHAS', 16.00, 10)
    -- LANCHES GOURMET
    , ('FIRE BURGER', 20.00, 10)
    , ('MAGNÍFICO', 28.00, 10)
    , ('CALABRESA CRISPY', 25.00, 10)
    , ('VIP BURGUER', 25.00, 10)
    , ('PIG BURGUER', 20.00, 10)
;

INSERT INTO item_pedido (
    cd_pedido
    , cd_produto
    , qt_itens
    , vl_unitario
    , vl_total
)
VALUES
    ()
;
