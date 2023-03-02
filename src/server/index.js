//创建基本的web服务器
const express = require('express')
const app = express()

var bodyParser = require('body-parser');//用于req.body获取值的
// app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));
//引入course.js等接口
const user = require('./api/user.js')
const list = require('./api/list')

//使用接口
app.use('/api/user',user)
app.use('/api/list',list)

app.get('/zwz',(req,res)=>{
    res.send('当前服务器已连接')
})

// var path = require('path');

//监听接口
app.listen(3000,function(){
    console.log('服务器已连接3000port')
})

