<template>
    <div>
        <input 
            type="text" 
            v-if="tag=='input'"
            :placeholder="placeholder"
            :class="{'errorStype':refInput.error}"
            v-model="refInput.val"
            @blur="validateInput"
        >
        <textarea name="" id="" cols="30" rows="10" v-else  
            :placeholder="placeholder"
            v-model="refInput.val"
            @blur="validateInput"
            :class="{'errorStype':refInput.error}"
            ></textarea>
        <span v-if="refInput.error" class="errorMessage">{{ refInput.message }}</span>
    </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, reactive, computed } from 'vue';
import { ValidateFunc, mitter } from '@/libs/mitt';
import { RuleProps } from '@/types/new';
// import { mitter } from "@/libs/mitt/index";

/**
 * data struct  
 * TagType :决定表单的类型
 */
type TagType = 'input' | 'textarea'

/**
 * 数据 props 夫组件传来的信息 ： tag 表单的类型； placeholder  
 * emit 推送事件 监视父传来的值
 * refInput 表单输入的内容（val）、是否不符合验证（error）、不符合内容时的报错（message）
 * emailReg 邮箱格式正则
 */
const props = defineProps<{
    tag:String,
    placeholder:string ,
    modelValue:string,
    rules:RuleProps[]
}>()
const emit = defineEmits(['update:modelValue'])
const refInput = reactive({
    val : computed({
        get:()=>props.modelValue ,
        set:val=>{
            emit('update:modelValue',val)
        }
    }),
    error:false,
    message:''
})
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


/**
 * method 
 * validateInput 用于验证每一条表单是否符合父组件传来的规则
 */
const validateInput = ():boolean=>{
    console.log(111)
    const result = props.rules.every(rule=>{
        let passed = true
        switch (rule.type) {
            case 'required':
                    passed = refInput.val.trim() !== ''
                break;
            case 'email':
                passed = emailReg.test(refInput.val)
                break;
            case 'email':
            passed = rule.validator ? rule.validator() : true
                break;
            default:
                break;
        }
        refInput.message = rule.message
        return passed
    })
    refInput.error = !result
    return result
    // mitter.emit('form-item-created',validateInput)
}

/**
 * 操作
 * mitter.emit 将表单验证结果发送给ValidateForm组件
 */
onMounted(()=>{
    mitter.emit('form-item-created',validateInput)
})
</script>

<style scoped lang="less">
input,textarea{
    resize: none;
    width: 100%;
    padding: .375rem .75rem;
    box-sizing: border-box;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 5px;
    &:focus{
        // background-color: red;
        border-color:  rgb(134, 183, 254);
        // border-color: ;
        box-shadow: 0 0 0 0.25rem rgba(196, 220, 255);
        outline: none;
    }
}
// {
//     width: 100%;
//     padding: .375rem .75rem;
//     box-sizing: border-box;
//     border: 1px solid #ced4da;
//     &:focus,&:hover{
//         // background-color: red;
//         border-color: #dc3545;
//         box-shadow: 0 0 0 0.25rem rgba(220,53,69,.25);
//         outline: none;
//     }
// }
.errorMessage{
    color: rgb(220, 53, 69);
}
.errorStype{
    border-color:  rgb(220, 53, 69);
    &:focus{
        border-color:  rgb(220, 53, 69);
        // border-color: ;
        box-shadow: 0 0 0 0.25rem rgba(246, 204, 208);
        outline: none;
    }
}
</style>