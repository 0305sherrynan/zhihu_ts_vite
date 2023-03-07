export const returnImg = (item:string)=>{
    // return require(`@/assets/icon/${item.avatar}`)
    return new URL(`/src/assets/icon/${item}`, import.meta.url).href
}