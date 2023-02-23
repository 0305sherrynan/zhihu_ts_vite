// import {useUserStore} from '@/store/user.ts'
const $sql =require('../map/listMap')
const $conf = require('../../conf/db.js')
const $utils = require('../../utils/utils.js')
const mysql = require('mysql')
// const store = useUserStore()
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
     * 实现接口
     * showUserInfo 展示所有的user信息
     * loginSearch 验证登录是否成功
     * deleteInfoById 删除指定id的用户信息
     * addInfo 增加user信息
     * updateInfo 更新user信息
     */ 

    showListInfo :(req, res)=>{
        console.log(req)
        pool.getConnection((err,connection)=>{
            // console.log(req)
            const params = req.query
            console.log(params)
            const min = params.currentPage*params.pageSize+1
            const max = min+Number(params.pageSize)-1
            console.log(min,max)
            connection.query($sql.showListInfo,[min,max],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    // const ulIsShow = result[0].ulIsShow
                    // const token = result[0].token
                    // const username = result[0].username
                    console.log(result)
                    r = {
                        code:true,
                        data:result
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    }
}