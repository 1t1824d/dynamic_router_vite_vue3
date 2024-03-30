
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
 
// 自动导入views目录下的所有.vue文件
const modules = import.meta.glob('/src/views/*.vue');
 
const routes = Object.keys(modules).map((path) => {
  const componentName = path.split('/').pop().split('.')[0];
  return {
    path: `/${componentName=='HomeView'?'/':componentName}`,
    component: modules[`${path}`].default || modules[`${path}`],
  };
});
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
 
export default router;