<template>
    <div>
        <form action="">
            <slot name="default"></slot>
            <div>
                <slot name="submit"></slot>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

import { ValidateFunc, mitter } from '@/libs/mitt';
// import { type } from 'os';


const funcArr:ValidateFunc[] = []
const callback = (func?:ValidateFunc)=>{
    // if (func) funcArr.push(func)
    console.log(123)
}

mitter.on('form-item-created',callback)
</script>

<style scoped>

</style>