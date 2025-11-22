<template>
  <div class="settings-container">
    <h4 class="text-center">系统设置</h4>
    <div class="settings-form">
      <div class="form-group">
        <label>系统名称:</label>
        <input type="text" v-model="systemName">
      </div>
      <div class="form-group">
        <label>每页显示条数:</label>
        <select v-model="pageSize">
          <option value="10">10条/页</option>
          <option value="20">20条/页</option>
          <option value="50">50条/页</option>
        </select>
      </div>
      <div class="form-group">
        <label>是否开启缓存:</label>
        <input type="checkbox" v-model="enableCache">
      </div>
      <button @click="saveSettings" class="save-btn">保存设置</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const systemName = ref('商城后台管理系统')
const pageSize = ref('10')
const enableCache = ref(true)

const saveSettings = () => {
  alert('设置已保存')
}
</script>

<style scoped>
.settings-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.form-group label {
  width: 120px;
}

.form-group input,
.form-group select {
  padding: 6px;
  flex: 1;
}

.save-btn {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>