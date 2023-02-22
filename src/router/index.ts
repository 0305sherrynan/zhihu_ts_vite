import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

//引入路由组件
// import login from '../pages/login/index.vue'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'home',
        component:()=>import('../view/Home/Home.vue'),
        // children:[
        //     {    
        //         path:'user',
        //         name:'user',
        //         component:()=>import('../pages/user/index.vue')
        //     }
        // ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../view/Login/Login.vue')
    }
    // {
    //     path:'/user',
    //     name:'user',
    //     component:()=>import('../pages/user/index.vue')
    // }
]
const router =  createRouter({
    routes,
    history:createWebHashHistory()
})
export default router