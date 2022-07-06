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
      },
      {
        path: '/dict',
        name: 'dact',
        component: () => import('../views/dict'),
        meta: {
          title: '数字字典',
          icon: 'dict'
        }
      },
      {
        path: '/menus',
        name: 'menus',
        component: () => import('../views/menus'),
        meta: {
          title: '菜单管理',
          icon: 'menus'
        }
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../views/roles'),
        meta: {
          title: '角色管理',
          icon: 'roles'
        }
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/users'),
        meta: {
          title: '用户管理',
          icon: 'users'
        }
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
