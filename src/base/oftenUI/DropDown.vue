<template>
    <div class="drop-down" @click.prevent="toggleOpen" ref="dropdownRef">
        <a >你好{{props.title}}</a>
        <img src="@/assets/icon/triangle.svg" alt="">
        <ul v-if="isOpen" class="drop-down-menu">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue';
import isClickOutPage from '@/hooks/event/isClickOutPage'
// import { watch } from 'fs';

/**
 * 数据
 * props 父组件传来的数据 disabled
 * isOpen 是否打开下拉框
 * dropdownRef 获取顶部元素
 * 
 */
const props = defineProps<{
  title: string
}>()
const isOpen = ref<boolean>(false) 
const dropdownRef = ref<HTMLElement | null>(null)

/**
 * 方法 toggleOpen 打开下拉框
 * 
 */
const toggleOpen = ():void=>{
    isOpen.value = !isOpen.value
}

/**
 * 操作 
 * {isClickOut} 调用hook/event/isClickOutPage 得到是否点击在外面
 * watch isClickOut  监听是否点在外面
 */
 const {isClickOut} = isClickOutPage(dropdownRef)
 watch(isClickOut,()=>{
    if(isClickOut.value == true) isOpen.value = false
 })
</script>

<style scoped lang="less">
.drop-down{
    color: rgb(255, 255, 255);
    font-size: 20px;
    text-align: center;
    line-height: 37px;
    width: 180px;
    height: 37px;
    border: 1px solid rgb(248, 249, 250);
    border-radius: 5px;
    img{
        width: 12px;
        margin-left: 7px;
    }
    .drop-down-menu{
        padding: 7px 0;
        border-radius: 3px;
        border: 1px solid rgb(217, 217, 217);
        margin-top: 10px;
        font-size: 16px;
        list-style: none;
        color: rgb(0,0,0);
        width: 170px;
        background-color: rgb(255, 255, 255);
    }
}
.drop-down:hover{
    cursor: pointer;
}
</style>