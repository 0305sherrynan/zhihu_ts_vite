<template>
    <div class="root-box">
        <div class="private-header">
            <img src="" alt="">
            <div></div>
        </div>
        <div class="column-list">
            <post-list :posts="posts"></post-list>
            <!-- <column-list :list=""></column-list> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import PostList from '@/components/PostList.vue';
import { useUserStore } from '@/store/user';

// import ColumnList from '@/components/ColumnList.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {ColumnProps,commitUserData,ListProps} from "#/store"

/**
 * data
 * route 路由 
 * state 用户状态存储
 */
const route = useRoute()
const posts : ListProps<ColumnProps> = {}
const state = useUserStore()

/**
 * 操作 
 * 获取对应信息
 */
// onMounted(()=>{
//   console.log(route.params)  
  for (let [key,value] of Object.entries(state.columns.data)){
    if (value.account == state.user.account){
        posts[key] = value
    }
  }
  console.log(posts)
// })  
//     state.columns.data.reduce((previousValue: { [x: string]: any; }, currentValue: { id: string | number; })=>{
//         if (currentValue.id){
//             previousValue[currentValue.id] = currentValue
//         }
//         return previousValue
//     },{} as {[key:string]:ListProps<ColumnProps>})
// })
</script>

<style scoped lang="less">
.root-box{
    >*{
        margin: 0 auto;
    }
}
.private-header{
    width: 690px;
    height: 200px;
    border-bottom: 1px solid rgb(222, 226, 230);
    margin-bottom: 20px;
}
.column-list{
    
}
</style>