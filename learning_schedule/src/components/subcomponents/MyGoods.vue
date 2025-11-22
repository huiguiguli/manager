<template>
  <div class="goods-container">
    <h4 class="text-center">商品管理</h4>
    <table border style="width: 100%;">
      <thead>
        <tr>
          <th>商品ID</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>库存</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in goodsList" :key="item.id">
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
              ¥{{ item.price }}
            </template>
            <template v-else>
              <input type="number" step="0.01" v-model="editForm.price" />
            </template>
          </td>
          <td>
            <template v-if="editingId !== item.id">
              {{ item.stock }}
            </template>
            <template v-else>
              <input type="number" v-model="editForm.stock" />
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

const goodsList = ref([
  { id: 1, name: '商品A', price: 99.9, stock: 100 },
  { id: 2, name: '商品B', price: 199.9, stock: 50 },
  { id: 3, name: '商品C', price: 299.9, stock: 30 }
])

const editingId = ref<number | null>(null)
const editForm = reactive({
  name: '',
  price: 0,
  stock: 0
})

const startEdit = (item: any) => {
  editingId.value = item.id
  editForm.name = item.name
  editForm.price = item.price
  editForm.stock = item.stock
}

const saveEdit = (id: number) => {
  const index = goodsList.value.findIndex(item => item.id === id)
  if (index !== -1) {
    goodsList.value[index] = { ...goodsList.value[index], ...editForm }
  }
  editingId.value = null
  alert('商品编辑成功')
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
  width: 100px;
}
</style>