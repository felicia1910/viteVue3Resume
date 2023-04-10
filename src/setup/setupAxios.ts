import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from '../App.vue';

// 全局設定 AJAX Request 攔截器 (interceptor)
axios.interceptors.request.use(async function (config) {
  return config
}, function (error) {
  // request error
  return Promise.reject(error)
})

// 全局設定 AJAX Response 攔截器 (interceptor)
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // response error
  return Promise.reject(error)
})

createApp(App).use(VueAxios, axios)
