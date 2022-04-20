import { createRouter, createWebHistory } from "vue-router"
// createRouter 用于创建路由 createWebHistory：路由的模式
import Home from "../views/home2.vue";
import Detail from "../components/Detail.vue";
import Create from "../views/create.vue";
import TagCloud from "../views/tag.vue"
const routes = [
  { path: '/', name: 'Home', component: Home },
  // props:true 表示<router-link :to="{name:'Detail',params:{id:post.id}}"> 可以将param中的值传递到跳转页面
  { path: '/detail/:id', name: 'Detail', component: Detail, props: true },
  { path: '/create', name: 'Create', component: Create },
  {path:'/tags/:item',name:'TagCloud',component:TagCloud}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router