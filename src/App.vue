<script setup lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
import {useUserStore} from '@/store/user'
// import { User } from '#/globall';
import { computed, onMounted} from 'vue';
// import Message from './base/zwzUI/Message/Message.vue';
import Message from './libs/zwzUI/message'
import {getUserInfo} from '@/utils/api/user'
import Loader from './base/oftenUI/Loader.vue';
import { useComponStore } from './store/component';


/**
 * 数据
 * store 获取Component相关的存储
 * isloading store下的state
 * 
 */
const store = useComponStore()
const isloading = store.loading
// const userStore  = useUserStore()
// const currentUser = userStore.user
// console.log(currentUser.ulIsShow)
// const currentUser = computed(()=>userStore.$state)
/**
 * 操作
 */


</script>

<template>
  <div>
    <global-header  ></global-header>
    <router-view class="main"></router-view>
    <Loader text="拼命加载中" v-if="isloading"></Loader>
    <!-- <Message :type="'success'" :message="'123'"></Message> -->
  </div>

  <footer class="footer">
    <small>
      <ul class="list">
        <li>© 2023 阿哲专栏</li>
        <li>课程</li>
        <li>文档</li>
        <li>联系</li>
        <li>更多</li>
      </ul>
    </small>
  </footer>

</template>

<style scoped lang="less">
.main{
  // background-color: red;
  // height: calc(97vh - 73px - 86px); 
}
.footer{
  // margin-top: auto;
  // z-index: 999;
  // position: absolute;
  // bottom: 0;
  width: 100%;
  height: 73px;
  // position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(248, 249, 250);
  .list{
    // text-align: center;
    // position: absolute;
    top: 50%;
  >li{
    color: rgb(108, 117, 141);
    display: inline-block;
    margin-right: 10px;
  }
  }

}
</style>
