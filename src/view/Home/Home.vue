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
        <div class="btn-loader" @click="loadMorePage" v-if="!isLastPage">
            <div class="loader-span-box">
                <span>加载更多</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ColumnList from '@/components/ColumnList.vue';
import useLoadMore from '@/hooks/store/useLoadMore';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { computed, onMounted,ref } from 'vue';

/**
 * 数据
 * store 获取用户存储信息
 */
const store = useUserStore()
const currentPage = computed(() => store.columns.currentPage)
// const {columns} = storeToRefs(store)
// const a = ref(store.columns.currentPage)
// const currentPage =ref(columns.value.currentPage)
/**
 * 方法
 */

/**
 * 操作
 * onMounted fetchColumns() 获取列表信息
 * hook 获取 loadMorePage 方法、isLastPage 数据
 */
onMounted(()=>{
    store.fetchColumns().then(()=>{
        // currentPage.value++
    })
})

const {loadMorePage,isLastPage} = useLoadMore(currentPage.value+1,3)
</script>

<style scoped lang="less">
@media (min-width: 992px) {
    .homePage{
        max-width: 960px;
    }
    
}
@media (min-width: 768px) {
    .homePage{
        max-width: 720px;
    }
    
}

@media (min-width: 1200px) {
    .homePage{
        max-width: 1140px;
    }
    
}
@media (min-width: 1400px) {
    .homePage{
        max-width: 1320px;
    }
    
}

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
    >.btn-loader{
        margin: 30px 0;
        >.loader-span-box{
            border: 1px solid rgb(52, 133, 253);
            display: inline-block;
            border-radius: 4px;
            /* padding: 10px; */
            padding: 6px 120px 6px 120px;
            color: rgb(13, 110, 253);
            font-weight: 549;
        }
    }
}
</style>