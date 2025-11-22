<template>
    <div class="main">
        <ul class="todo-list">
            <li v-for="item in list" :key="item.id" :class="{completed: item.done}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.done"/>
                    <label>{{ item.name }}</label>
                    <button class="destory" @click="delTodo(item.id)"></button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps(['list'])
const emit = defineEmits(['delToDo']) // 事件名改为'delToDo'

const delTodo = id => {
    emit('delToDo', id)
}
</script>


<style>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li .view {
  display: flex;
  align-items: center;
  padding: 15px 20px;
}

.toggle {
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  cursor: pointer;
}

.toggle::before {
  content: '';
  width: 30px;
  height: 30px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}

.toggle:checked::before {
  border-color: #2ecc71;
  background: #2ecc71;
}

.toggle:checked::after {
  content: '✓';
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.todo-list li label {
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  margin-left: 45px;
}

.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.destory {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background: none;
  border: none;
  cursor: pointer;
}

.destory::after {
  content: '×';
}

.destory:hover {
  color: #af5b5e;
}
</style>