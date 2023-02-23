import { useUserStore } from '@/store/user';
import { computed, ref } from 'vue';
// import { onMounted } from 'vue';

/**
 * 数据
 * store 获取用户存储信息
 */

const useLoadMore =  (currentPage:number,pageSize:number=3)=>{
    const store = useUserStore()
    const current = ref(currentPage) //使其具有响应式 用于表示当前页码
    
    /**
     * @description useLoadMore 返回的内容
     * loadMorePage 加载更多的界面
     * isLastPage 是否为最后一页 即加载完
     */
    const loadMorePage = async ()=>{
        // console.log(currentPage)
        // console.log(current.value)
        await store.fetchColumns(current.value,pageSize).then(()=>{
            current.value++ //用于isLastPage判断
        })
    }
    const isLastPage = computed(()=>{
        // console.log(Math.floor(store.columns.total/pageSize),current.value)
        return Math.floor(store.columns.total/pageSize)<current.value
    })
    return {loadMorePage,isLastPage}
}
export default useLoadMore