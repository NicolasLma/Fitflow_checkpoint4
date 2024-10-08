DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255)
);

INSERT INTO 
users (
    email,
    password,
    firstname,
    lastname
)

VALUES (
    "toto@toto.com",
    "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
    "toto",
    "toto"
);