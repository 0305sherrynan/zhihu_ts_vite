import { onUnmounted } from "vue"

const createDom = (NodeId:string)=>{
    const div = document.createElement('div')
    div.id = NodeId
    document.body.appendChild(div)
    onUnmounted(()=>{
        document.body.removeChild(div)
    })
    // return {div}
}
export default createDom