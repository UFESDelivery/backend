CREATE DATABASE ufesdelivery;

USE ufesdelivery;

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
);
