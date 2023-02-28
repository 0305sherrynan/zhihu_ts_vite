<template>
    <div>
        <input 
            type="text" 
            v-if="tag=='input'"
            :placeholder="placeholder"
        >
        <textarea name="" id="" cols="30" rows="10" v-else  :placeholder="placeholder"></textarea>
    </div>
</template>

<script setup lang="ts">
import { onMounted, PropType } from 'vue';
import { ValidateFunc, mitter } from '@/libs/mitt';

/**
 * data struct  
 */
type TagType = 'input' | 'textarea'
/**
 * 数据
 */
const props = defineProps<{
    tag:String,
    placeholder:string 
}>()
onMounted(()=>{
    mitter.emit('form-item-created',()=>true)
})
</script>

<style scoped lang="less">
input{
    width: 100%;
    padding: .375rem .75rem;
    box-sizing: border-box;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 5px;
    &:focus,&:hover{
        // background-color: red;
        border-color: #dc3545;
        box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);
        outline: none;
    }
}
textarea{
    width: 100%;
    padding: .375rem .75rem;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    &:focus,&:hover{
        // background-color: red;
        border-color: #dc3545;
        box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);
        outline: none;
    }
}

</style>