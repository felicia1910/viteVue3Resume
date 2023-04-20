import router from '@/router';
import { formToJSON } from 'axios';
import { defineStore } from 'pinia';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import {DropItems} from '@/common/typeInterface';


// 創建 pinia
const pinia = createPinia();
pinia.use(piniaPersist)
//VUE3這專案因為將部分動作function轉移到compostion-api，所以把DATA統一裝在一起會更好管理

interface GlobalState {
  clientTest: boolean,
  language: string,
  loading: boolean,
  imgUrl :string
} // defineStore 呼叫後返回一個函式，呼叫該函式獲得 Store 實體 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//宣告STORE
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const useStore = defineStore(
  {
    id: 'GlobalState', // id: 必須的，在所有 Store 中唯一 
    // state: 返回物件的函式 
    state: (): GlobalState => ({
      clientTest: false,//前端使用假資料測試時的控制處(前端在測試時不強制登陸)
      loading: false,
      language: 'zh-tw',
      imgUrl:import.meta.env.VITE_IMG_URL
    }),
    getters: {
    },
    // 不使用箭頭函式 
    actions: {
      setLang(val:string){this.language=val}
    },
  });


export default pinia;
