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
