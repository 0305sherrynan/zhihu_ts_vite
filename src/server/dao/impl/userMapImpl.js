const $sql =require('../map/userMap')
const $conf = require('../../conf/db.js')
const $utils = require('../../utils/utils.js')
const mysql = require('mysql')
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

    showUserInfo :(req, res)=>{
        console.log(req)
        pool.getConnection((err,connection)=>{
            // console.log(req)
            const params = req.query
            console.log(params)
            connection.query($sql.showUserInfo,[params.account,params.password],
                (err,result)=>{
                let r = {}
                if (result!=false){
                    const ulIsShow = result[0].ulIsShow
                    const token = result[0].token
                    const username = result[0].username
                    const account = result[0].account
                    r = {
                        code:true,
                        data:{
                            ulIsShow,
                            token,
                            username,
                            account
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    loginSearch :(req,res)=>{
        pool.getConnection((err,connection)=>{
                    //获得参数
            const params = req.body
            // ['1','空我','男','2022-11-11','12','12'],
            // console.log(params)  
            connection.query($sql.loginSearch,[params.username,params.password],
                    (err,result)=>{
                        console.log(result)
                        if (result!=false){
                            result = {
                                code:true,
                                data:{message:"success"}
                            }
                        }else{
                            result = {
                                code:false,
                                data:{message:'failed'}
                            }
                        }

                        $utils.closeConnection(res,result,connection)
                    })
        })
    },
    deleteInfoById :(req,res)=>{
        pool.getConnection((err,connection)=>{
            //获得参数
            const params = req.params.id
            console.log(params)
            connection.query($sql.deleteInfoById,[params],(err,result)=>{
                let r = {}
                console.log(result)
                // if (result){
                    r = {
                        code:true,
                        data:{
                            message:'删除成功'
                        }
                    }
                // }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    addInfo :(req,res)=>{
        pool.getConnection((err,connection)=>{
                        //获得参数
            const params = req.body
            console.log(params)
            connection.query($sql.addInfo,[params.username,params.password,params.id,params.time],
                (err,result)=>{
                let r = {}
                console.log(result)
                if (result){
                    r = {
                        code:true,
                        data:{
                            message:'添加成功'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
    
    updateInfo :(req,res)=>{
        pool.getConnection((err,connection)=>{
                        //获得参数
            const params = req.body
            console.log(params)
            connection.query($sql.updateInfo,[params.username,params.password,params.id,params.time,params.id],
                (err,result)=>{
                let r = {}
                console.log(result)
                if (result){
                    r = {
                        code:true,
                        data:{
                            message:'更新成功'
                        }
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },
/**
 * 删除teacher的信息
 * 
 * 
 */
        // deleteInfo :(req,res)=>{
        //     pool.getConnection((err,connection)=>{
        //                     //获得参数
        //         const params = req.body
        //         console.log(params)
        //         connection.query($sql.deleteInfo,[params.tno],(err,result)=>{
        //             if (result){
        //                 result = {
        //                     code:true,
        //                     result:'添加成功'
        //                 }
        //             }
        //             $utils.closeConnection(res,result,connection)
        //         })
        //     })
        // }

        
}