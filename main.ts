import express from 'express';
import { Request, Response } from 'express';
import expressSession from 'express-session';
import path from 'path';
import { Client } from 'pg';
import dotenv from 'dotenv';

const app = express();

// connecting the database to the server
dotenv.config();
export const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
client.connect();

// setting up cookies for clients such that server could recognize the session of each request 
app.use(expressSession({
    secret: 'Cloud Computing Group Project',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req: Request, res: Response) {
    res.sendFile(path.resolve('./public/index.html'))
});

import { registerUserRoute } from './registerUser';
import { logInUserRoute } from './logInUser';
import { logOutUserRoute } from './logOutUser';
import { getProductsRoute } from './getProducts';
import { adminAddProductRoute } from './adminAddProduct';
import { adminDeleteProductRoute } from './adminDeleteProduct';
import { adminUpdateProductRoute } from './adminUpdateProduct';
import { userAddOrderRoute } from './userAddOrder';
import { userDeleteOrderRoute } from './userDeleteOrder';
import { userGetOrdersRoute } from './userGetOrders';
import { userUpdateProfileRoute } from './userUpdateProfile';

app.use(registerUserRoute);
app.use(logInUserRoute);
app.use(logOutUserRoute)
app.use(getProductsRoute);
app.use(userAddOrderRoute);
app.use(userDeleteOrderRoute);
app.use(userGetOrdersRoute);
app.use(userUpdateProfileRoute);
app.use(adminAddProductRoute);
app.use(adminDeleteProductRoute);
app.use(adminUpdateProductRoute);

app.use(express.static('public'));

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});
