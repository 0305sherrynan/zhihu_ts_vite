<template>
    <teleport to="#loader">
        <div class="loader-box">
            <div class="span-box">
                <div class="animate"></div>
                <span>{{ text }}</span>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import createDom from '@/hooks/dom/createDom';

/**
 * 数据
 * 父 App传给子 Loader
 */
const props = defineProps<{
    text:string
}>()

/**
 * 操作 
 * createDom 创建loader元素
 */
createDom('loader')
</script>

<style scoped lang="less">
@keyframes donut-spin{
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.loader-box{
    background-color: rgba(51, 51, 51,0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    .span-box{
        // text-align: center;
        align-self: center;
        .animate{
            margin:0 auto;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: aqua;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            animation: donut-spin 1.2s linear infinite;
        }
    }
}
</style>