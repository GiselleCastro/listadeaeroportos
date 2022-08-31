DROP TABLE aeroportosBrasil;

DELETE FROM aeroportosBrasil;

CREATE TABLE aeroportosBrasil(
    iata_code CHAR(3) PRIMARY KEY,
    iso_country CHAR(2) NOT NULL,
    iso_region CHAR(5) NOT NULL,
    municipality VARCHAR(40) NOT NULL,
    name VARCHAR(40) NOT NULL,
    type VARCHAR(40) NOT NULL
);

SELECT * FROM aeroportosBrasil;