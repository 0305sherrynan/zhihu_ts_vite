<template>
    <Transition name="down">
        <div class="message-box" v-show="isShow" :style="style[props.type]">
            <img :src="style[props.type].icon" alt="">
            <span>{{ props.message }}</span>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType} from 'vue';
import {messageType} from '@/types/ui'

    /**
     * 数据 
     * isShow 是否显示Message盒子
     * style 样式对象
     * props 传参数据类型
     */
    const isShow = ref<boolean>(false)
    const style = {
        warning: {
        icon: 'src/assets/icon/segi-icon-warning.svg',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
        },
        error: {
            icon: 'src/assets/icon/叉叉.svg',
            color: '#F56C6C',
            backgroundColor: 'rgb(254, 240, 240)',
            borderColor: 'rgb(253, 226, 226)'
        },
        success: {
            icon: 'src/assets/icon/对勾小.svg',
            color: '#67C23A',
            backgroundColor: 'rgb(240, 249, 235)',
            borderColor: 'rgb(225, 243, 216)'
        },
        info: {
            icon: 'src/assets/icon/info.svg',
            color: '#909399',
            backgroundColor: '#edf2fc',
            borderColor: '#ebeef5'
        }
    }
    const props = defineProps({
        type: {
            default: null,
            type: String as PropType<messageType>,
            required:true
        },
        message:{
            default:'',
            type:String,
            required:true
        }
    })

    onMounted(()=>{
        isShow.value = true
    })

</script>

<style scoped lang="less">
.down{
    &-enter{
        &-from{
            transform: translate3d(0, -75px, 0);
            opacity: 1;
        }
        &-active{
            transition: all 0.5s;
        }
        &-to{
            transform: none;
            opacity: 1;
        }
    }
}
.message-box {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #b31818;
  color: #999;
  border-radius: 4px;
  >img{
    width: 15px;
    height: 14px;
    vertical-align: middle;
    margin-right: 30px;
  }
  >span{
    font-size: 14px;
    line-height: -17px;
    position: relative;
    top: 1px;
  }
//   i {
//     margin-right: 4px;
//     vertical-align: middle;
//   }
//   .text {
//     vertical-align: middle;
//   }
}
</style>