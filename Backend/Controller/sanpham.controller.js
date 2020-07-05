const SanphamModel = require('../Model/sanpham.model');
const { response } = require('express');
module.exports = {
    // Từng hàm trong controllẻ được gọi ra Route theo URL tương ứng
    getData: async (req,res)=>{
        let data = await SanphamModel.find();
        res.send(data);
    },
    add: async (req,res)=>{
        let {ten,soluong,gia,hinhanh} = req.body;
        let newProduct = await SanphamModel({ten:ten,soluong:soluong,gia:gia,hinhanh:hinhanh});
        newProduct.save()
        res.redirect('http://localhost:3000/Sanpham');
    },
    delete: async (req,res)=>{
        let {_id} = req.body;
        console.log(_id)
        await SanphamModel.deleteOne({_id:_id})
        res.redirect('http://localhost:3000/Sanpham');
    }
}