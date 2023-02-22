// import { type } from "os"
import {messageType} from '@/types/ui'
import MessageVue from '@/base/zwzUI/Message/Message.vue'
import { h, ref, render } from 'vue'


/**
 * 数据
 * 传入的参数数据结构 Props
 * div 用于render渲染的ShallowRoot 
 * timer 设置防抖
 */


interface Props{
    type:messageType,
    info:string,
    duration?:number
}
const div = document.createElement('div')
//挂载到页面
document.body.appendChild(div)
//设置class类
div.setAttribute('class','message-box')
let timer: null | ReturnType<typeof setTimeout> = null

/**
 * 方法
 * Message 暴露出去 用于生成根节点（h） 和 渲染（render）
 * success error info warning 设置Message下的多种属性方法
 */
export default function Message({type,info,duration = 3000}:Props){
   const vNode =  h(MessageVue,{type,message:info})
   render(vNode,div)
   timer && clearTimeout(timer)
   timer = setTimeout(()=>{
        render(null,div)
   },duration)
   
}
Message.success = (info:string,duration?:number)=>{
    Message({type:'success',info,duration} )
}
Message.error = (info:string,duration?:number)=>{
    Message({type:'error',info,duration} )
}
Message.info = (info:string,duration?:number)=>{
    Message({type:'info',info,duration} )
}
Message.warning = (info:string,duration?:number)=>{
    Message({type:'warning',info,duration} )
}