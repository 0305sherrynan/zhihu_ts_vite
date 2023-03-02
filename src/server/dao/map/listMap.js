const listSqlMap = {
    /**
     * map层：mysql语句
     * showListInfo 展示所有的list信息
     * postData 提交数据
     * deleteInfoById 删除指定id的用户信息
     * addInfo 增加user信息
     * updateInfo 更新user信息
    */
    showListInfo:'select id,title,avatar,description from columnlist where columnlist.id >=? and columnlist.id <=?',
    // loginSearch:"select * from user  where username = ? and password = ?",
    postData:"insert into columnlist values(?,?,?,?,?)",
    // postData:"",
    deleteInfoById:`delete from user where id = ?`,
    addInfo:'insert into user values(?,?,?,?)',
    updateInfo:'update user set username = ?,password = ?,id = ?,time = ? where id = ?'
} 
module.exports = listSqlMap