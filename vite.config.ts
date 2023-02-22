import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    //配置@代表src下的目录
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      }
    ]
  },
  css:{
    //css预处理器
    preprocessorOptions:{
      less:{
        charset:false,
        additionalData:'@import "./src/design/index.less";'
      }
    }
  },
  server:{
    // port:8111,//配置打开的端口号
    open:true,//默认启动时打开brower
    proxy:{
      "/zwz":{
        target:'http://localhost:3000',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/zwz/, ""),
      }
    }
  }
})
