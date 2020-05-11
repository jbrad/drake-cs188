const express = require("express");
const server = express();

const { initCustomerControllers } = require('./controllers/customer-controller');
const { initCartControllers } = require('./controllers/cart-controller');
const { initItemControllers } = require('./controllers/item-controller');
const { initCartItemControllers } = require('./controllers/cart-item-controller');

server.get("/", (req, res)=>{
	res.send("Hello World!!!")}
);

server.listen("5555")

initCustomerControllers(server);
initCartControllers(server);
initItemControllers(server);
initCartItemControllers(server);