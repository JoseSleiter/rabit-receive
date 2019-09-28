const express  = require('express');
const ProductoCtrl = require('../controllers/producto.controller')
const producto = express.Router();

producto
.get('/send1', ProductoCtrl.send1)
.get('/test', ProductoCtrl.test)
.get('/productos', ProductoCtrl.index)
.post('/productos', ProductoCtrl.store)
.get('/productos/:id', ProductoCtrl.show)
.delete('/productos/:id', ProductoCtrl.delete)

module.exports = producto;
