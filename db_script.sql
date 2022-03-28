CREATE TABLE User(
    id ID_no primary key,
    last_name VARCHAR(255) not null,
    first_name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    password_hash VARCHAR(255) not null,
    phone_number INTEGER,
    is_admin boolean not null,
    company_id VARCHAR(255) not null,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
CREATE TABLE Orders(
    id order_no primary key,
    ID_no INTEGER,
    FOREIGN KEY (ID_no) REFERENCES User(ID_no),
    order_date timestamp with time zone,
    product_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES Product(product_id),

);
CREATE TABLE Product(
    id product_id primary key,
    name VARCHAR(255) not null,
    cost INTEGER not null,
    timeframe INTEGER not null,
);
