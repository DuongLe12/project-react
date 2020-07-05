const express = require('express');
const mongoose = require('mongoose');
const SanphamRoute = require('./Router/Sanpham.route');
mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true,useUnifiedTopology: true});

var bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(cors()) 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// app.get('/',(req,res) =>{
//     res.send('kkkkk')
// })

// Request từ React được gửi lên đây
// Tìm cái URL phù hợp để xử lý
// Vd URL là http://localhost:3001/sanpham thì tìm đến cái nào là sanpham, nếu http://localhost:3001/user tìm đến cái nào 
// là user

// VD tìm được url là sanpham thì gọi cái route là sanphamRoute
app.use('/sanpham',cors(),SanphamRoute)

const port = 3001;

app.listen(port);