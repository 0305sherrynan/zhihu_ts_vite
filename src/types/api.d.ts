export namespace userApi{
    interface ResponseSuccess<T>{
        code:boolean,
        data:T
    }
    interface accountUser{
        account:string,
        password:string
    }
    interface ResponseSuccessList<T>{
        code:boolean,
        data:Array<T>
    }
}