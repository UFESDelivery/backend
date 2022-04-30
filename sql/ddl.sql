CREATE DATABASE ufesdelivery;

USE ufesdelivery;


CREATE TABLE cliente (
    cd_cliente INTEGER NOT NULL AUTO_INCREMENT
    , no_cliente VARCHAR(150)

    , CONSTRAINT pk_cliente
        PRIMARY KEY (cd_cliente)
);


CREATE TABLE desconto (
    cd_desconto INTEGER NOT NULL AUTO_INCREMENT
    , cd_cliente INTEGER
    , ds_desconto VARCHAR(100) NOT NULL
    , qt_usos INTEGER NOT NULL DEFAULT 0
    , qt_max_usos INTEGER NOT NULL DEFAULT 1
    , dt_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    , dt_fim TIMESTAMP DEFAULT NULL

    , CONSTRAINT pk_desconto
        PRIMARY KEY (cd_desconto)

    , CONSTRAINT fk_desconto_cliente
        FOREIGN KEY (cd_cliente)
            REFERENCES cliente(cd_cliente)
);


CREATE TABLE pedido (
    cd_pedido INTEGER NOT NULL AUTO_INCREMENT
    , cd_cliente INTEGER NOT NULL
    , cd_status INTEGER NOT NULL
    , vl_total_impostos DOUBLE DEFAULT 0
    , vl_total_compra DOUBLE NOT NULL
    , vl_total_descontos DOUBLE DEFAULT 0
    , vl_total_a_pagar DOUBLE NOT NULL
    , dt_ultima_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    , dt_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    , dt_fim TIMESTAMP DEFAULT NULL

    , CONSTRAINT pk_pedido
        PRIMARY KEY (cd_pedido)

    , CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (cd_cliente)
            REFERENCES cliente(cd_cliente)
);


CREATE TABLE aplicacao_desconto (
    cd_desconto INTEGER NOT NULL
    , cd_pedido INTEGER NOT NULL

    , CONSTRAINT pk_aplicacao_desconto_pedido
        PRIMARY KEY (cd_desconto, cd_pedido)

    , CONSTRAINT fk_aplicacao_desconto_desconto
        FOREIGN KEY (cd_desconto)
            REFERENCES desconto(cd_desconto)

    , CONSTRAINT fk_aplicacao_desconto_pedido
        FOREIGN KEY (cd_pedido)
            REFERENCES pedido(cd_pedido)
);


CREATE TABLE imposto (
    cd_imposto INTEGER NOT NULL AUTO_INCREMENT
    , no_imposto VARCHAR(10) NOT NULL
    , vl_percentual DOUBLE NOT NULL

    , CONSTRAINT pk_imposto
        PRIMARY KEY (cd_imposto)
);


CREATE TABLE aplicacao_imposto (
    cd_imposto INTEGER NOT NULL
    , cd_pedido INTEGER NOT NULL
    , vl_total DOUBLE NOT NULL

    , CONSTRAINT pk_aplicacao_imposto_pedido
        PRIMARY KEY (cd_imposto, cd_pedido)
    
    , CONSTRAINT fk_aplicacao_imposto_imposto
        FOREIGN KEY (cd_imposto)
            REFERENCES imposto(cd_imposto)

    , CONSTRAINT fk_aplicacao_imposto_pedido
        FOREIGN KEY (cd_pedido)
            REFERENCES pedido(cd_pedido)
);


CREATE TABLE produto (
    cd_produto INTEGER NOT NULL AUTO_INCREMENT
    , no_produto VARCHAR(100) NOT NULL
    , vl_unitario DOUBLE NOT NULL
    , qt_estoque INTEGER NOT NULL
    , dt_ultima_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    , dt_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    , CONSTRAINT pk_produto
        PRIMARY KEY (cd_produto)
);


CREATE TABLE item_pedido (
    cd_pedido INTEGER NOT NULL
    , cd_produto INTEGER NOT NULL
    , qt_itens INTEGER NOT NULL
    , vl_unitario DOUBLE NOT NULL
    , vl_total DOUBLE NOT NULL

    , CONSTRAINT pk_item_pedido_produto
        PRIMARY KEY (cd_pedido, cd_produto)

    , CONSTRAINT fk_item_pedido_pedido
        FOREIGN KEY (cd_pedido)
            REFERENCES pedido(cd_pedido)

    , CONSTRAINT fk_item_pedido_produto
        FOREIGN KEY (cd_produto)
            REFERENCES produto(cd_produto)
);