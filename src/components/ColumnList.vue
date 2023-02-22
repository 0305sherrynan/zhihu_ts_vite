<template>
    <div class="list-box">
        <div v-for="(item,index) in list" class="list-box-each">
            <div>
                <img :src="returnImg(item)" alt="">
                <h5>{{ item.title }}</h5>
                <p>{{ item.description }}</p>
                <router-link to="" class="skip-btn">进入专栏</router-link>
            </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import {ColumnProps} from '#/store'
/**
 * 数据 
 */

const props = defineProps<{
    list:ColumnProps[]
}>()

/**
 * 操作
 */
const returnImg = (item:ColumnProps)=>{
    // return require(`@/assets/icon/${item.avatar}`)
    return new URL(`/src/assets/icon/${item.avatar}`, import.meta.url).href
}
</script>

<style scoped lang="less"> 
.list-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.list-box-each{
    padding: 15px;
    >div{
        width: 400px;
        height: 250px;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >*{
            margin-top: 20px;
        }
        >img{
            width: 50px;
            height: 49px;
            border-radius: 50%;
        }
        >h5{
            font-size: 19px;
        }
        >.skip-btn{
            border: 1px solid rgb(13, 110, 253);
            padding: .375rem .75rem;
            font-size: 1rem;
            border-radius: .25rem;
            color: rgb(13, 110, 253);
            &:hover{
                background-color: rgb(13, 110, 253);
                color: rgb(255,255,255);
            }
    }
    }  
}
</style>