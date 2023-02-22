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
        async fetchColumns(currentPage:number = 1,pageSize:number = 6){
            try {
                const data = await getHomeList(currentPage,pageSize)
                console.log(data)
                this.columns.data = data.data
            } catch (error) {
                Message.error((error as Error).message)                
            }
        }
    },
  })