<template>
    <div class="root-box">
        <div class="post-detail">
        <nav >
            <ol class="nav-ol">
                <li><a href="/">首页 /</a></li>
                <li><a :href="`/columns/${currentId}`">专栏首页 /</a></li>
                <li><a href="javascript:;">{{ currentPost.title }}</a></li>
            </ol>
        </nav>
        <article class="post-article">
            <img :src="returnImg((currentPost.avatar as string))" alt="" class="post-img">
            <h2 class="post-title">{{ currentPost.title }}</h2>
            <div class="author-info">
                <user-profile :user-info="currentPost"></user-profile>
            </div>
        </article>
    </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { useRoute } from 'vue-router';
import {returnImg} from '@/utils/exchange/imgSrc'
import UserProfile from '@/components/UserProfile.vue';


/**
 * data
 * state
 * route 
 * currentId 当前的数据id
 * currentPost 当前id对应的数据
 */
const state = useUserStore()
const route = useRoute()
const currentId = route.params.id as string
const currentPost = state.getCurrentPost(currentId)
</script>

<style scoped lang="less">
.root-box{
    text-align: center;
}
.post-detail{
    margin: 0 auto;
    display: inline-block;
    nav{
        box-sizing: border-box;
        padding: 12px;
        width: 690px;
        // height: 100px;
        background-color: rgb(233, 236, 239);
        .nav-ol{
            
            display: flex;
            list-style: none;
            justify-content: center;
            >li{
                >a{
                    
                    color: rgb(13, 110, 253);
                }
                &:last-child{
                    >a{
                        color: rgb(108, 117, 140);
                    }
                }
            }
        }
    }
}
.post-article{
    width: 690px;
    .post-img{
        width: 100%;
        height: 400px;
    }
    .post-title{
        font-size: 42px;
        font-weight: 400;
    }
    .author-info{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid rgb(222, 226, 230);
        border-top: 1px solid rgb(222, 226, 230);
    }
}
</style>