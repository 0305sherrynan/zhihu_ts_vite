//数组转对象 key为id
export const arrToObj =<T extends {id?:string}>(arr:Array<T>)=>{
    return arr.reduce((previousValue, currentValue)=>{
        if (currentValue.id){
            previousValue[currentValue.id] = currentValue
        }
        return previousValue
    },{} as {[key:string]:T})
}
