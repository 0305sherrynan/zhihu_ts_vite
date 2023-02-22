import { requestInstance } from "@/libs/axios";
import {userApi} from '#/api'
import { useUserStore } from "@/store/user";
import {ColumnProps} from "#/store"


export const  getUserInfo = (accountForm:userApi.accountUser)=>{
    return requestInstance.get<any,userApi.ResponseSuccess<User>>("zwz/api/user/showUserInfo",{params:accountForm})
}
export const getHomeList = (currentPage:number,pageSize:number)=>{
     const store = useUserStore()
    return requestInstance.get<any,userApi.ResponseSuccessList<ColumnProps>>(`zwz/api/list/showListInfo?currentPage=${currentPage}&pageSize=${pageSize}&account=${store.user.account}`)
}