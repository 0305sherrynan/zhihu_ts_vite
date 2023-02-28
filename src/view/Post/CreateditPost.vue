<template>
    <div class="post-container">
        <h4>{{ isEditMode?"编辑文章":"新建文章" }}</h4>
        <uploader
        :uploaded="uploadedData"
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
        <validate-form >
            <div class="validate-form">
                <h4>文章标题：</h4>
                <validate-input tag="input" placeholder="请输入文章标题"></validate-input>
            </div>
            <div class="validate-form">
                <h4>文章详情：</h4>
                <validate-input tag="textarea" placeholder="请输入文章详情"></validate-input>
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
import { ref } from 'vue';



/**
 * 数据
 * isEditMode 是否为编辑状态
 * uploadedData 传给 子组件 Uploader 的数据
 */
const isEditMode = ref<boolean | null>(null)
const uploadedData = ref<{data:{url:string}} >({data:{url:''}})
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