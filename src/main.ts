import { createApp } from 'vue';
import App from './App.vue';
import store from "./store/index";
import router from './router';
import i18n from './setup/i18n';// 引入

// setup
import './assets/css/app.scss';
import './setup/setupAxios';

//element
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import "element-plus/theme-chalk/index.css";


const app = createApp(App);

//icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
};

app.use(router).use(store).use(ElementPlus).use(i18n).mount('#app');
