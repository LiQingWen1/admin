import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: { title: '首页', icon: '<el-icon><HomeFilled /></el-icon>' }
      }
    ]
  },
  {
    name: 'sys',
    path: '/sys',
    component: layout,
    meta: { title: '系统管理', icon: '<el-icon><Operation /></el-icon>' },
    redirect: '/sys/users',
    children: [
      {
        path: '/sys/users',
        name: 'users',
        component: () => import('.././views/users'),
        meta: { title: '用户管理', icon: '<el-icon><Tickets /></el-icon>' }
      },
      {
        path: '/sys/roles',
        name: 'roles',
        component: () => import('.././views/roles'),
        meta: { title: '角色管理', icon: '<el-icon><Tickets /></el-icon>' }
      },
      {
        path: '/sys/menus',
        name: 'menus',
        component: () => import('.././views/menus'),
        meta: { title: '菜单管理', icon: '<el-icon><Tickets /></el-icon>' }
      }
    ]
  },
  {
    name: 'tool',
    path: '/tool',
    component: layout,
    meta: { title: '系统工具', icon: '<el-icon><Tools /></el-icon>' },
    redirect: '/tool/dict',
    children: [
      {
        path: '/tool/dict',
        name: 'dict',
        component: () => import('.././views/dict'),
        meta: { title: '数字字典', icon: '<el-icon><Tickets /></el-icon>' }
      }
    ]
  }
]

export const privateRouters = []
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
