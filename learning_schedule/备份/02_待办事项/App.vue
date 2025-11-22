<template> 
  <ToDoHeader @addTodo="addTodo"></ToDoHeader>
  <ToDoMain :list="showList" @delToDo="delToDo"></ToDoMain>
  <ToDoFooter :lastLength="lastLength" :status="status" :completedCount="completedCount" @updateStatus="updateStatus" @clearCompleted="clearCompleted"></ToDoFooter>
 
</template>

<script setup>
  import ToDoHeader from './components/ToDoHeader.vue';
  import ToDoMain from './components/ToDoMain.vue';
  import ToDoFooter from './components/ToDoFooter.vue';
  import {ref,computed} from 'vue'
  
  const list = ref([
    {id: 1,name: '晨练',done: false,},
    {id: 2,name: '练书法',done: true,},
  ])
  
  const addTodo = (name) => {
    list.value.push({name, done: false, id: ~~(Math.random() * 1000)})
  }
  
  const delToDo = id => {
    list.value = list.value.filter(item => item.id !== id)
  }
  
  const lastLength = computed(() => {
    return list.value.filter(item => !item.done).length
  })

  const status = ref('all')
  
  const showList = computed(() => {
    if(status.value === 'all'){
      return list.value
    }
    if(status.value === 'active'){
      return list.value.filter(item => !item.done)
    }
    if(status.value === 'completed'){
      return list.value.filter(item => item.done)
    }
  })
  
  const updateStatus = (newStatus) => {
    status.value = newStatus;
  }


   // 计算已完成任务的数量
  const completedCount = computed(() => {
    return list.value.filter(item => item.done).length
  })
  
  // 清除已完成任务
  const clearCompleted = () => {
    list.value = list.value.filter(item => !item.done)
  }
</script>


<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
  font-weight: 300;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 主容器样式 */
.todo-app {
  background: #fff;
  margin: 50px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
              0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width: 550px;
}
</style>