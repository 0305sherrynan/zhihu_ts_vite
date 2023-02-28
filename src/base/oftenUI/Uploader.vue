<template>
    <div class="uploader-container" @click="triggerUpload">
        <slot name="loading" v-if="fileStatus == fstatus.LOADING"></slot>
        <slot name="uploaded" v-else-if="fileStatus == fstatus.LOADED" :uploadedData="uploadedData"></slot>
        <slot name="default" v-else></slot>
        <input 
            type="file" 
            name="" 
            id="" 
            accept="image/*" 
            ref="fileRef" 
            style="display: none;"
            @change="handleFileChange"
        >
    </div>
</template>

<script setup lang="ts">
import Message from '@/libs/zwzUI/message';
import { HTMLInputEvent } from '@/types/new';
import { ref } from 'vue';
/**
 * data struct
 * fstatus 枚举文件的状态
 */
enum fstatus{
    LOADING = 'loading',
    LOADED = 'uploaded'
}
/**
 * 数据 
 * fileStatus 文件当前状态
 * fileRef ref绑定 input-file
 * avatar 上传的图片
 * uploaded 父CreateditPost传来的数据 如果是EditMole会传来图片
 * uploadedData 上传成功的相关数据 传给父组件 CreateditPost 的slot进行渲染
 */
const fileStatus = ref<string>('')
const fileRef = ref<HTMLInputElement | null>(null)
const avatar = ref<string >('')
const props = defineProps<{
    uploaded:{data:{url:string}} 
}>()
const uploadedData = ref(props.uploaded)

/**
 * 方法
 * triggerUpload 触发文件上传事件
 * handleFileChange  文件内容发生变化触发事件
 */
const triggerUpload = ():void=>{
    fileRef.value?.click()
}
const handleFileChange = (e:Event )=>{
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files){
        const upLoadFile = files[0]
        avatar.value = URL.createObjectURL(upLoadFile)
    }
    fileStatus.value = fstatus.LOADING
    try {
        uploadedData.value!.data.url = avatar.value
        Message.success('上传成功')
    } catch (error) {
        Message.error('上传失败')
    }
    

    setInterval(()=>{
        fileStatus.value = fstatus.LOADED
    },1000)
   
    
}

</script>

<style scoped lang="less">
.uploader-container{
    display: flex;
    align-items: center;
    background-color: rgb(248, 249, 250);
    height: 200px;
    // margin: 0 auto;
}
</style>