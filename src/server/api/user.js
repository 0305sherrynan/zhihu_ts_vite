const express = require('express')
const  router = express.Router()
const $sql = require('../dao/impl/userMapImpl.js')

/**
 * 接口发送，包含方式
 * showUserInfo 展示user的信息：name和time
 * registerAccount 注册一个账号
 * deleteInfoById 删除指定id的用户信息
 * addInfo 增加一条user信息
 * 'patch' 更新user信息
 */

router.get('/showUserInfo',(req,res)=>{
    // res.send({'zwz':'123'})
    $sql.showUserInfo(req,res)
})
router.get('/infoRows',(req,res)=>{
    $sql.infoRows(req,res)
})
router.post('/registerAccount',(req,res)=>{
    // console.log(req.body)
    $sql.registerAccount(req,res)
})
// router.delete('/deleteInfoById/:id',(req,res)=>{
//     $sql.deleteInfoById(req,res)
// })
// router.post('/addInfo',(req,res)=>{
//     $sql.addInfo(req,res)
// })
// router.patch('',(req,res)=>{
//     $sql.updateInfo(req,res)
// })

module.exports = router