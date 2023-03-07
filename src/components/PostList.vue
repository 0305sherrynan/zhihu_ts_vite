<template>
    <!-- <div class="box"> -->
        <div v-for="post in posts" class="article">
            <div>
                <router-link :to="`/posts/${post.id}`" class="post-title">{{ post.title }}</router-link>
            </div>
            <div class="img-and-span">
                <img :src="returnImg((post.avatar as string))" alt="">
                <span>{{ post.description }}</span>
            </div>
            <div class="createAt">{{ post.createAt }}</div>
        </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
import {ColumnProps,commitUserData,ListProps} from "#/store"
import { onMounted } from "vue";
import {returnImg} from '@/utils/exchange/imgSrc'
/**
 * data
 * props post 父组件ColumnDetail传来的列表数据
 */
const props =  defineProps<{
    posts:ListProps<ColumnProps>

}>()
console.log(123)
onMounted(()=>{
    console.log(props.posts)
})
</script>

<style scoped lang="less">

.article{
        //传统ie盒子模型
    margin: 0 auto;
    margin-bottom: 20px;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) ;
    box-sizing: border-box;
    width: 700px;
    height: 230px;
    padding: 24px;
    border: 1px solid rgb(222, 226, 230);
    .post-title{
        font-size: 24px;
        font-weight: 500;
        color: black;
    }
    .img-and-span{
        position: relative;
        >img{
            width: 200px;
            height: 110px;
            border-radius: 6px;
        }
        >span{
            color: #6c757d;
            position: absolute;
            top: 0;
        }
    }

}
</style>