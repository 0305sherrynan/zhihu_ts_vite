import { defineStore, StoreDefinition } from 'pinia'
export const useComponStore = defineStore('compon', {
    state: () => ({
        loading:false
    }),
    getters:{

    },
    actions: {
        async fetchColumns(){
            
        }
    },
  })