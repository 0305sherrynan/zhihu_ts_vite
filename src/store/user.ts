import { defineStore, StoreDefinition } from 'pinia'
import type {ColumnProps, commitUserData} from '#/store'
// import {commitUserData} from '#/store'
import { getHomeList, getUserInfoRows, commitPostData } from '@/utils/api/user'
import Message from '@/libs/zwzUI/message'
import { PropType } from 'vue'
// import Message from '@/base/zwzUI/Message/Message.vue'


// import type {User} from '#/global'

export const useUserStore = defineStore('user', {
    state: () => ({
        // user:<User>{}
        user:<User>{},
        columns:{
            data:[] as ColumnProps[],
            currentPage:0,
            total:0
        },
        infoRow:0
    }),
    getters:{

    },
    actions: {
        //获取列表资源
        async fetchColumns(currentPage:number = 0,pageSize:number = 3){
            try {
                console.log(currentPage)
                const data = await getHomeList(currentPage,pageSize)
                console.log(data)
                // this.columns.data = data.data
                data.data.forEach((item)=>{
                    this.columns.data.push(item)
                })
                // console.log(this.columns.data.length)
                this.columns.currentPage++
                this.columns.total+=data.data.length

            } catch (error) {
                Message.error((error as Error).message)                
            }
        },
        //获取当前用户数据行数
        async fetchUserRow(){
            try {
                // console.log(this.user.account)
                const result =  await getUserInfoRows({account:this.user.account})
                this.infoRow = result.data.rows
                
            } catch (error) {
                Message.error('获取用户数据失败')
            }
        },
        //提交当前view->Post层的表单内容
        async commitCreatePost(data:commitUserData){
            await commitPostData(data)
        }
    },
  })