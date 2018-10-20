// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import Axios from 'axios';
import store from './store/index.js';
import bus from "./Bus/bus.js";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

Vue.prototype.$axios = Axios;
Vue.prototype.Host = "/api2";
Vue.prototype.Douban = "/api";

// Axios.defaults.baseURL = 'https://api.example.com';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log("请求方式:" + config.method);
  // console.log("请求:" + config.data);
  // console.log("请求地址:" + config.url);

  // console.log(store.state.loading);
  store.state.notloading = false;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log("响应:" + response);
  store.state.notloading = true;
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
