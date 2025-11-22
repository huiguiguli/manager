<template>
    <div>
        <div class="header">
        <p class="title">todos</p>
        <input class="new-todo" type="text" placeholder="请填写任务" v-model.trim="name" @keyup.enter="enterName" />
        </div>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
    const name = ref('')
    const emit = defineEmits(['addTodo'])
    const enterName = () => {
        emit('addTodo', name.value)
        name.value = ''
    }
</script>

<style>
.header {
  padding: 30px 0;
  text-align: center;
  border-bottom: 1px solid #ededed;
}

.title {
  font-size: 100px;
  font-weight: 100;
  color: #e74c3c;
  margin: 0 0 20px 0;
  text-rendering: optimizeLegibility;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  box-sizing: border-box;
}

.new-todo::placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.new-todo:focus {
  outline: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

</style>