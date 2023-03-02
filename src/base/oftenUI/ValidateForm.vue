<template>
    <div>
        <form action="">
            <slot name="default"></slot>
            <div @click="submitForm">
                <slot name="submit"></slot>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

import { ValidateFunc, mitter } from '@/libs/mitt';
// import { type } from 'os';

const emit = defineEmits(['form-submit'])

const funcArr:ValidateFunc[] = []

/**
 * method
 * callback @param func 由ValidateInput传来的验证函数
 * submitForm 按钮点击 触发事件 进而将最终验证结果发送给上一级组件
 */
const callback = (func?:ValidateFunc)=>{
    if (func) funcArr.push(func)
    console.log(123)
}
const submitForm = ()=>{
    const result = funcArr.map(func=>func()).every(result=>result)
    emit('form-submit',result)
}

mitter.on('form-item-created',callback)
</script>

<style scoped>

</style>