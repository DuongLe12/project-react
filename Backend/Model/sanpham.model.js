// Create Schema
const mongoose = require('mongoose');
var SanphamSchema = new mongoose.Schema({ten: String, soluong: Number, gia:Number, hinhanh: String})
var SanphamModel =  mongoose.model('SanphamModel',SanphamSchema,'sanpham');

module.exports = SanphamModel;