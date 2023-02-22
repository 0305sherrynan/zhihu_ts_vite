<template>
    <div class="homePage">
        
        <section class="home-header">
            <div>
                <img src="@/assets/icon/callout.svg" alt="">
                <h2>随心写作，自由表达</h2>
                <router-link to="/create" class="home-write ">开始写文章</router-link>
            </div>
        </section>
        <span>发现精彩</span>
        <column-list :list="store.columns.data"></column-list>
    </div>
</template>

<script setup lang="ts">
import ColumnList from '@/components/ColumnList.vue';
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';

/**
 * 数据
 * store 获取用户存储信息
 */
const store = useUserStore()

/**
 * 操作
 * onMounted fetchColumns() 获取列表信息
 */
onMounted(()=>{
    store.fetchColumns()
})
</script>

<style scoped lang="less">

.homePage{

    margin: 0 auto;
    width: 1320px;
    text-align: center;
    .home-header{
        // text-align: center;
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
        width: 50%;
        margin: 0 auto;
        img{
            width: 50%;
        }
        h2{
            font-size: 36px;
            font-weight: 400;
        }
        .home-write{
            text-decoration: none;
            .btn(96px,17px,9px);
        }
    }
    >span{
        font-size: 25px;
        font-weight: 400;

    }
}
</style>