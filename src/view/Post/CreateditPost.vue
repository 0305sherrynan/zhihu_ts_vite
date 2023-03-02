<template>
    <div class="post-container">
        <h4>{{ isEditMode?"编辑文章":"新建文章" }}</h4>
        <uploader
        :uploaded="uploadedData"
        @file-uploaded-success="onFileUploadedSuccess"
        >
            <!--default-->
            <div class="loading-box">
                <h2>点击上传头图</h2>
            </div>
            <template #loading>
                <!-- <loader :text="null"></loader> -->
                <div class="loading-box">
                    
                    <h2>Loading...</h2>
                </div>
            </template>
            <template #uploaded="dataProps">
                <img :src="dataProps.uploadedData?.data.url" alt="" class="uploadedImg">
            </template>
        </uploader>
        <validate-form @form-submit="onFormSubmit">
            <div class="validate-form">
                <h4>文章标题：</h4>
                <validate-input 
                    tag="input" 
                    placeholder="请输入文章标题"
                    v-model="titleVal"
                    :rules="titleRule"
                ></validate-input>
            </div>
            <div class="validate-form">
                <h4>文章详情：</h4>
                <validate-input
                    tag="textarea" 
                    placeholder="请输入文章详情"
                    v-model="contentVal"
                    :rules="TextAreaRule"
                ></validate-input>
            </div>
            <template #submit>
                <div class="btn-submit validate-form">
                    发表文章
                </div>
            </template>
        </validate-form>
    </div>
</template>

<script setup lang="ts">
import Loader from '@/base/oftenUI/Loader.vue';
import Uploader from '@/base/oftenUI/Uploader.vue';
import ValidateForm from '@/base/oftenUI/ValidateForm.vue';
import ValidateInput from '@/base/oftenUI/ValidateInput.vue';
import { RuleProps } from '@/types/new';
// import { watch } from 'fs';
import { ref, watch} from 'vue';
import {useUserStore} from '@/store/user'


/**
 * 数据
 * isEditMode 是否为编辑状态
 * uploadedData 传给 子组件 Uploader 的数据
 * titleVal 双向绑定 获取子组件validate-input的数据 input时
 * contentVal 双向绑定 获取子组件validate-input的数据 textarea时
 * state user的状态管理
 * IMGUrl 要上传的图片的url
 */
const isEditMode = ref<boolean | null>(null)
const uploadedData = ref<{data:{url:string}} >({data:{url:''}})
const titleVal = ref('')
const contentVal = ref('')
const titleRule: RuleProps[]  = [{type:'required',message:'文章标题不能为空'}] 
const TextAreaRule: RuleProps[]  = [{type:'required',message:'文章内容不能为空'}] 
const state = useUserStore()
let IMGUrl:string | undefined
// watch(titleVal,(new,old)=>{
//     console.log(new)
// })
watch([titleVal,contentVal],(newValue,oldValue)=>{
	console.log('变化了',newValue,oldValue)
})

/**
 * method
 * onFileUploadedSuccess upLoader 组件成功上传图片后emit该组件
 * onFormSubmit validate-form 组件触发提交按钮 emit此组件
 */
const onFileUploadedSuccess = (imgUrl:File)=>{
    let reader = new FileReader()
    
    if (imgUrl) {
    reader.readAsDataURL(imgUrl);
  }
    reader.addEventListener("load", function () {
        // IMGUrl = reader.result
         IMGUrl = reader.result?.toString().replace(/^data:image\/\w+;base64,/, '')
  }, false);
    console.log(imgUrl)
    // IMGUrl = imgUrl.result
}
const onFormSubmit = async (result:boolean)=>{
    if (result){
        //获取当前用户数据行数
        console.log(IMGUrl)
        const dataRows = await state.fetchUserRow()
        state.commitCreatePost({ title:titleVal.value,
                                 description:contentVal.value,
                                 id:(state.infoRow+1).toString(),
                                 account:state.user.account,
                                 avatar:IMGUrl
                                })
    }
}
</script>

<style scoped lang="less">

.post-container{
    >*{
        width: 1296px;
        margin: 0 auto;
    }
}
.loading-box{
    text-align: center;
    // margin: 0 auto;
    width: 100%;
    >h2{
    color: rgb(108, 117, 125);
    font-size: 32px;
    font-weight: 400;
}
}
.validate-form{
    margin-top: 20px;
}
.uploadedImg{
    width: 400px;
    height: 100%;
    margin: 0 auto;
}
.btn-submit{
    text-align: center;
    .btn();
    &:hover{
        cursor: pointer;
    }
}
</style>