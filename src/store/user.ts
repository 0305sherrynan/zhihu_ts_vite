import { defineStore, StoreDefinition } from 'pinia'
import type {ColumnProps} from '#/store'
import { getHomeList } from '@/utils/api/user'
import Message from '@/libs/zwzUI/message'
import { PropType } from 'vue'


// import type {User} from '#/global'

export const useUserStore = defineStore('user', {
    state: () => ({
        // user:<User>{}
        user:<User>{},
        columns:{
            data:[] as ColumnProps[],
            currentPage:0,
            total:0
        }
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
        }
    },
  })