<template>
  <div class="menu-container">
    <h4 class="text-center">菜单管理</h4>
    <ul class="menu-list">
      <li v-for="item in menuList" :key="item.id" class="menu-item">
        {{ item.name }}
        <button class="edit-btn">编辑</button>
      </li>
    </ul>
    <button class="add-btn">添加菜单</button>
  </div>
</template>

<script setup lang="ts">
const menuList = [
  { id: 1, name: '用户管理' },
  { id: 2, name: '权限管理' },
  { id: 3, name: '商品管理' },
  { id: 4, name: '订单管理' },
  { id: 5, name: '系统设置' }
]
</script>

<style scoped>
.menu-list {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 20px auto;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 8px;
}

.edit-btn, .add-btn {
  padding: 4px 8px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-btn {
  display: block;
  margin: 0 auto;
}
</style>