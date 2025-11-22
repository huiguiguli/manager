<template>
  <div class="rights-container">
    <h4 class="text-center">权限管理</h4>
    <table border style="width: 100%;">
      <thead>
        <tr>
          <th>权限ID</th>
          <th>权限名称</th>
          <th>权限描述</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rightsList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <template v-if="editingId !== item.id">
              {{ item.name }}
            </template>
            <template v-else>
              <input type="text" v-model="editForm.name" />
            </template>
          </td>
          <td>
            <template v-if="editingId !== item.id">
              {{ item.desc }}
            </template>
            <template v-else>
              <input type="text" v-model="editForm.desc" />
            </template>
          </td>
          <td>
            <template v-if="editingId !== item.id">
              <button class="edit-btn" @click="startEdit(item)">编辑</button>
            </template>
            <template v-else>
              <button class="save-btn" @click="saveEdit(item.id)">保存</button>
              <button class="cancel-btn" @click="cancelEdit">取消</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const rightsList = ref([
  { id: 1, name: 'user:manage', desc: '用户管理权限' },
  { id: 2, name: 'goods:manage', desc: '商品管理权限' },
  { id: 3, name: 'order:manage', desc: '订单管理权限' },
  { id: 4, name: 'setting:manage', desc: '系统设置权限' }
])

const editingId = ref<number | null>(null)
const editForm = reactive({
  name: '',
  desc: ''
})

const startEdit = (item: any) => {
  editingId.value = item.id
  editForm.name = item.name
  editForm.desc = item.desc
}

const saveEdit = (id: number) => {
  const index = rightsList.value.findIndex(item => item.id === id)
  if (index !== -1) {
    rightsList.value[index].name = editForm.name
    rightsList.value[index].desc = editForm.desc
  }
  editingId.value = null
  alert('编辑成功')
}

const cancelEdit = () => {
  editingId.value = null
}
</script>

<style scoped>
.edit-btn, .save-btn {
  padding: 4px 8px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.cancel-btn {
  padding: 4px 8px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input {
  padding: 3px;
  width: 150px;
}
</style>