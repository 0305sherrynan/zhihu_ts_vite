const userSqlMap = {
    /**
     * map层：mysql语句
     * showUserInfo 展示所有的user信息
     * loginSearch 验证登录是否成功
     * deleteInfoById 删除指定id的用户信息
     * addInfo 增加user信息
     * updateInfo 更新user信息
    */
    showUserInfo:'select * from user where account = ? and password = ?',
    loginSearch:"select * from user  where username = ? and password = ?",
    deleteInfoById:`delete from user where id = ?`,
    addInfo:'insert into user values(?,?,?,?)',
    updateInfo:'update user set username = ?,password = ?,id = ?,time = ? where id = ?'
} 
module.exports = userSqlMap