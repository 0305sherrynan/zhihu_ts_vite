<template>
    <div>
        <div class="login">
        <div class="login-left">
            <section class="login-left-title">
                <h2>Welcome Login</h2>
                <p>We're so excited to see you again!</p>
            </section>
            <form action="" >
                <div>
                    <span>Email or phone number</span>
                    <input type="text" v-model="accountForm.account">
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" v-model="accountForm.password">
                    <a href="">Forget your password</a>
                </div>
                <div class="btnLogin" @click="clickBtn">
                    <span>Log in</span>
                </div>
                <span class="login-left-lastSpan">Don't have an account?<a href="">Sign up</a></span>
            </form>
        </div>
        <div class="login-right">123</div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted} from 'vue';
import {getUserInfo} from '@/utils/api/user'
import { userApi } from '@/types/api';
import Message from '@/libs/zwzUI/message';
import router from '@/router';
import {useUserStore} from '@/store/user'
/**
 * 数据
 * accountForm 表单内容
 * userStore
 */
const accountForm = reactive<userApi.accountUser>({
    account:'',
    password:''
})
const userStore = useUserStore()
/**
 * 方法
 * clickBtn 点击登录验证
 */
const  clickBtn =async ()=>{
    const data = await getUserInfo(accountForm)
    console.log(data.data)
    if (data.code == true) {
        Message.success('登录成功，即将跳转')
        // const reallyObj = data.data
        // const 
        //pinia设置user
        userStore.$patch({
            user:data.data
        })
        router.push('/')
    }else{
        Message.error('账号或密码错误')
    }
}

// onMounted(()=>{
//     console.log(getUserInfo(accountForm))
// })
</script>

<style scoped lang="less">
div:has(.login){
    text-align: center;
}
.login{
    // width: 1000px;
    display: inline-block;
    height: 500px;
    background-color: red;
    // border: 1px solid rgb(0,0,0);
    border-radius: 10px;
    margin: 0 auto;
    >*{
        display: inline-block;
        
    }
    .login-left{
        width: 500px;
        background-color: rgb(255, 255, 255);
        height: 100%;
        border: 1px solid #f6f4f4;
        >.login-left-title{
            >p{
                color: rgb(102,102,102);
                font-weight: 550;
            }   
        }
        >form{
            >div{
                margin-top: 20px;
                padding: 0px 38px 0 38px;
                span{
                    
                    display: block;
                    text-align: left;
                    color: rgb(102,102,102)
                }
                input{
                    width: 416px;
                    height: 40px;
                    border: 2px solid #e6e6e6;
                    border-radius: 11px;
                }
                >a{
                text-align: left;
                display: block;
                text-decoration: underline;
                color: #111111;
                font-weight: 600;
                
            }
            }
            
            >.btnLogin{
                width: 424px;
                height: 49px;
                // border: 2px solid #e6e6e6;
                border-radius: 34px;
                background-color: #c3c3c3;
                margin: 0 auto;
                margin-top: 30px;
                padding:0;
                &:hover{
                    background-color: blue;
                    cursor: pointer;
                }
                span{
                    position: relative;
                    top: 50%;
                    text-align: center;
                    transform: translateY(-50%);
                    /* vertical-align: middle; */
                    font-size: 19px;
                    color: rgb(255, 255, 255);
                }
            }
        }
        .login-left-lastSpan{
            margin-top: 54px;
            display: block;
            a{
                text-decoration: underline;
                color: rgb(0, 0, 0);
                font-weight: 550;
            }
        }
    }
    .login-right{
        display: none;
        width: 500px;
        height: 100%;
    }
}
</style>