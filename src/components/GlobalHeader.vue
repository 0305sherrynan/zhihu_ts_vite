<template>
    <nav class="nav">
        <router-link to="/" class="nav-brand-title">阿哲专栏</router-link>
        <ul v-if="!currentUser.ulIsShow" class="nav-brand-drop-login">
            <li>
                <router-link to="/login">登录</router-link>
            </li>
            <li>
                <router-link to="/register">注册</router-link>
            </li>
        </ul>
        <ul v-else class="nav-brand-drop">
            <drop-down title="sherrynan">
                <dropdown-item class="dropdown-item">
                    <router-link to="/">新建文章</router-link>
                </dropdown-item>
                <dropdown-item class="dropdown-item">
                    <router-link to="/">我的专栏</router-link>
                </dropdown-item >
                <dropdown-item class="dropdown-item">
                    <router-link to="/">编辑资料</router-link>
                </dropdown-item>
                <dropdown-item class="dropdown-item">
                    <router-link to="" @click="handleLogout">退出登录</router-link>
                    <!-- <router-link></router-link> -->
                </dropdown-item>
            </drop-down>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DropDown from '@/base/oftenUI/DropDown.vue'
import DropdownItem from '@/base/oftenUI/DropdownItem.vue'
import {useUserStore} from '@/store/user'

/**
 * 数据 
 * Props 父组件传来的数据类型
 * props 父组件传来的数据 ulIsShow 是否为已经登录状态
 * userStore store store/user.ts
 * currentUser 获取store下的state信息 
 */
 const userStore  = useUserStore()
const currentUser = userStore.user
// interface Props {
//     ulIsShow:boolean
// }

// const props = withDefaults(defineProps<Props>(),{
//     ulIsShow:false
// })
/**
 * 方法
 * handleLogout 将登录状态转为为登录状态
 */
const handleLogout=()=>{
    currentUser.ulIsShow = false
}
 
/**
 * 操作
 */
// console.log(props.ulIsShow)
</script>

<style scoped lang="less">
.nav{
    width: 100%;
    height: 86px;
    margin-bottom: 1.5rem;
    background-color: rgb(13, 110, 253);
    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    position: relative;
    .nav-brand-title{
        font-size: 21px;
        color: rgb(255, 255, 255);

        display: inline-block;
        position: absolute;
        top: 50%;
        // left: 50%;
        transform: translateX(248px) translateY(-50%);
    }
    .nav-brand-drop-login{
        list-style: none;
        display: flex;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateX(-460px) translateY(-50%);
        
        >li{
            border: 1px solid #ffffff;
            width: 60px;
            text-align: center;
            border-radius: 7px;
            margin-left: 9px;
            >a{
                padding: 5px;
                width: 50px;
                display: inline-block;
                color: rgb(255, 255, 255);
            }
        }
    }
    .nav-brand-drop{
        
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateX(-460px) translateY(-50%);
        .dropdown-item{
                router-link{
                    // background-color: red;
                    position: relative;
                    left: -39px;
                    color: rgb(0, 0, 0);
                }

        } 
    }
}



</style>