<template>
    <li >
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
/**
 * 数据
 * Props 父组件传来的数据类型
 * props 父组件传来的数据 disabled
 */
interface Props {
    disabled?:boolean
}
const props = withDefaults(defineProps<Props>(),{
    disabled:false
})
</script>

<style scoped lang="less">
        li{
            position: relative;

        }

        
</style>