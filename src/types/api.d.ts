import { type } from 'os'
import {ColumnProps} from './store'
export namespace userApi{
    interface ResponseSuccess<T>{
        code:boolean,
        data:T
    }
    interface accountUser{
        account:string,
        password:string
    }
    //注册接口使用
    interface registerAccount extends accountUser{
        nickname:string
    }
    //用于 libs/api->getUserInfoRows 获取用户数据行数
    type pickUserAccount = Pick<User, "account">
    
    interface ResponseSuccessList<T>{
        code:boolean,
        data:Array<T>
    }


}