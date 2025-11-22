<template>
  <div class="orders-container">
    <h4 class="text-center">订单管理</h4>
    
    <!-- 订单列表 -->
    <table border style="width: 100%;" v-if="!selectedOrder">
      <thead>
        <tr>
          <th>订单ID</th>
          <th>客户名称</th>
          <th>订单金额</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in ordersList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.userName }}</td>
          <td>¥{{ item.amount }}</td>
          <td>
            <span :class="item.status === '已完成' ? 'status-success' : 'status-pending'">
              {{ item.status }}
            </span>
          </td>
          <td>
            <button class="edit-btn" @click="viewOrder(item)">查看</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 订单详情 -->
    <div class="order-detail" v-if="selectedOrder">
      <button class="back-btn" @click="backToList">返回列表</button>
      <h5>订单详情 #{{ selectedOrder.id }}</h5>
      <table class="detail-table">
        <tr>
          <td class="label">订单ID:</td>
          <td>{{ selectedOrder.id }}</td>
        </tr>
        <tr>
          <td class="label">客户名称:</td>
          <td>{{ selectedOrder.userName }}</td>
        </tr>
        <tr>
          <td class="label">订单金额:</td>
          <td>¥{{ selectedOrder.amount }}</td>
        </tr>
        <tr>
          <td class="label">状态:</td>
          <td>
            <span :class="selectedOrder.status === '已完成' ? 'status-success' : 'status-pending'">
              {{ selectedOrder.status }}
            </span>
          </td>
        </tr>
        <tr>
          <td class="label">下单时间:</td>
          <td>{{ selectedOrder.createTime }}</td>
        </tr>
        <tr>
          <td class="label">支付时间:</td>
          <td>{{ selectedOrder.payTime || '未支付' }}</td>
        </tr>
        <tr>
          <td class="label">收货地址:</td>
          <td>{{ selectedOrder.address }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 扩展订单数据，包含更多详情信息
const ordersList = ref([
  { 
    id: 'OD001', 
    userName: '小明', 
    amount: 299.8, 
    status: '已完成',
    createTime: '2023-10-01 10:30:00',
    payTime: '2023-10-01 10:35:22',
    address: '北京市朝阳区XX街道XX小区1号楼3单元501'
  },
  { 
    id: 'OD002', 
    userName: '小红', 
    amount: 199.9, 
    status: '待付款',
    createTime: '2023-10-02 15:40:12',
    payTime: null,
    address: '上海市浦东新区XX路XX号'
  },
  { 
    id: 'OD003', 
    userName: '小兰', 
    amount: 499.7, 
    status: '已完成',
    createTime: '2023-10-03 09:15:33',
    payTime: '2023-10-03 09:20:15',
    address: '广州市天河区XX大道XX号'
  }
])

const selectedOrder = ref<any>(null)

// 查看订单详情
const viewOrder = (order: any) => {
  selectedOrder.value = order
}

// 返回订单列表
const backToList = () => {
  selectedOrder.value = null
}
</script>

<style scoped>
.status-success {
  color: green;
}

.status-pending {
  color: orange;
}

.edit-btn {
  padding: 4px 8px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-btn {
  margin-bottom: 15px;
  padding: 4px 8px;
  background: #607d8b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.detail-table {
  width: 80%;
  border-collapse: collapse;
}

.detail-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.label {
  width: 120px;
  background-color: #f5f5f5;
  font-weight: bold;
}
</style>