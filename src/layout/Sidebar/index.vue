<template>
  <div class="sidebar">
    <!-- <h1 class="sidebar-title">首页</h1> -->
    <menu-tree :menu="menuList"></menu-tree>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
import { reactive } from 'vue'
const menuList = reactive([
  {
    title: '首页'
  },
  {
    title: '系统管理',
    children: [
      {
        title: '用户管理',
        path: '/staff'
      },
      {
        title: '角色管理',
        path: '/role'
      },
      {
        title: '菜单管理',
        path: '/menu'
      }
    ]
  },
  {
    title: '系统工具',
    children: [
      {
        title: '数字字典',
        path: '/dictionary'
      }
    ]
  }
])
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
}
// .sidebar-title{
//   text-align : center;
//   padding : 15px 0;
//   font-size : 22px;
//   color : #fff;
//   background: #545c64;
// }
</style>
