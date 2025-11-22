<template> 
  <h4>商品管理</h4>
 <div class="search-bar">
    <input 
      type="text" 
      v-model="searchKey" 
      placeholder="搜索商品名称..."
      class="form-control w-25 d-inline"
    />
    <select v-model="tagFilter" class="form-select w-25 d-inline ms-2">
      <option value="">全部标签</option>
      <option v-for="tag in allTags" :key="tag">{{ tag }}</option>
    </select>
  </div>
  <MyTable :goodsList="filteredGoods">
    <template #body="{row,index}">
      <td>{{index+1}}</td>
      <td>{{row.goods_name}}</td>
      <td>￥{{row.goods_price}}</td>
      <td>{{row.tags}}</td>
      <td>
        <button type="button" class="btn btn-outline-danger btn-sm" @click="onRemove(row.id)">删除</button>
      </td>
      <td>
        <input type="text" v-if="row.inputVisible" class="form-control form-control-sm ipt-tag" v-focus v-model="row.inputValue" @blur="onInputConfig(row)" @keyup.enter="onInputConfig(row)" @keyup.esc="row.inputValue = ''"/>
        <button class="btn btn-outline-primary rounded-pill" v-else @click="row.inputVisible=true">+Tag</button>
        <span class="btn btn-outline-dark" v-for="item in row.tags" :key="item">
          {{ item }}
        </span>
      </td>
    </template>
  </MyTable>
</template>

<script setup>
  import MyTable from './components/MyTable.vue';
  import { ref } from 'vue'
  const goodsList = ref([{
    id:1,
    goods_name:'夏季专柜同款女鞋',
    goods_price:298,
    tags:['舒适','透气'],
    inputVisible:false,
    inputValue:''
  },
  {
    id:2,
    goods_name:'冬季保暖女士休闲雪地靴 舒适加绒防水短靴 防滑棉鞋',
    goods_price:89,
    tags:['保暖', '防滑'],
    inputVisible:false,
    inputValue:''
  },
  {
    id:3,
    goods_name:'秋冬新款女士毛衣 套头宽松针织衫 简约上衣',
    goods_price:199,
    tags:['秋冬', '毛衣'],
    inputVisible:false,
    inputValue:''
  },
  {
    id:4,
    goods_name:'2023 春秋装新款大码女装 衬衫 上衣',
    goods_price:19,
    tags:['雪纺衫', '打底'],
    inputVisible:false,
    inputValue:''
  },
  {
    id:5,
    goods_name:'长款长袖圆领女士毛衣 2022 秋装新款假两件连衣裙',
    goods_price:178,
    tags: ['圆领', '连衣裙'],
    inputVisible:false,
    inputValue:''
  }])

  const onRemove = id => {
    goodsList.value = goodsList.value.filter(item => item.id != id)
  }
  const vFocus = (el) => {el.focus()}
  const onInputConfig = row => {
    const val = row.inputValue
    row.inputValue = ''
    row.inputVisible = false
    if(!val || row.tags.indexOf(val) != -1){
      return
    }
    row.tags.push(val)
  }


import { computed } from 'vue';
  // 新增响应式数据
const searchKey = ref('')
const tagFilter = ref('')

// 计算属性：过滤后的商品列表
const filteredGoods = computed(() => {
  return goodsList.value.filter(item => {
    const matchName = item.goods_name.toLowerCase().includes(searchKey.value.toLowerCase())
    const matchTag = !tagFilter.value || item.tags.includes(tagFilter.value)
    return matchName && matchTag
  })
})

// 计算所有唯一标签
const allTags = computed(() => {
  const tags = new Set()
  goodsList.value.forEach(item => {
    item.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})
</script>


<style scoped>
th{
  text-align: center;
}
td{
  line-height: 30px;
}
.ipt-tag{
  width: 80px;
  display: inline;
}
</style>