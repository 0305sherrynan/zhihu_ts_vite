export interface ColumnProps{
    id:string
    title:string
    avatar?:string | undefined
    description: string
}

interface commitUserData extends ColumnProps{
    account:string
}

export interface ImageProps{
    id?:string,
    url?:string
    fitUrl?:string
    createdAt?:string
}