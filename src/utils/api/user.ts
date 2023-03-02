import { requestInstance } from "@/libs/axios";
import {userApi} from '#/api'
import { useUserStore } from "@/store/user";
import {ColumnProps} from "#/store"

// 获取用户信息
export const  getUserInfo = (accountForm:userApi.accountUser)=>{
    return requestInstance.get<any,userApi.ResponseSuccess<User>>("zwz/api/user/showUserInfo",{params:accountForm})
}
//获取Home列表信息
export const getHomeList = (currentPage:number,pageSize:number)=>{
     const store = useUserStore()
    // return requestInstance.get<any,userApi.ResponseSuccessList<ColumnProps>>(`zwz/api/list/showListInfo?currentPage=${currentPage}&pageSize=${pageSize}&account=${store.user.account}`)
    return requestInstance.get<any,userApi.ResponseSuccessList<ColumnProps>>(`zwz/api/list/showListInfo?currentPage=${currentPage}&pageSize=${pageSize}`)
}
//发起注册请求
export const registerAccount = (registerForm:userApi.registerAccount)=>{
    return requestInstance.post<any,userApi.ResponseSuccess<{message:string}>>('zwz/api/user/registerAccount',registerForm)
}

//获取当前用户所对应数据的行数
export const getUserInfoRows = (account:userApi.pickUserAccount)=>{
    // const store = useUserStore()
    return requestInstance.get<any,userApi.ResponseSuccess<{rows:number}>>('zwz/api/user/infoRows',{params:account})
}
//提交当前view->post层的数据
export const commitPostData = (data:ColumnProps)=>{
    return requestInstance.post<any,userApi.ResponseSuccess<{message:string}>>('zwz/api/list/postData',data)
}