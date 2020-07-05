const { model } = require("mongoose");

const express = require('express');
var SanphamRoute = express.Router();
const SanphamController = require('../Controller/sanpham.controller')

// trong sanphamroute gọi các controller tương ứng với từng cái url 
SanphamRoute.get('/show',SanphamController.getData)
SanphamRoute.post('/add',SanphamController.add)
SanphamRoute.post('/delete',SanphamController.delete)

module.exports = SanphamRoute;