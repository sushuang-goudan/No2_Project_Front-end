import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress' ;
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
//在路由跳转之前展示
router.beforeEach((to,from,next) => {
  NProgress.start();
  next();
});
router.afterEach(() =>{
  NProgress.done();
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')