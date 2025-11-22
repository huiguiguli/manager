<template>
    <div class="footer">
        <span class="todo-count">共<strong>{{lastLength}}</strong>条未完成任务</span>
        <ul class="filters">
            <li>
                <a @click.prevent="updateStatus('all')" :class="{selected:status === 'all'}" href="#/">All</a>
            </li>
            <li>
                <a @click.prevent="updateStatus('active')" :class="{selected:status === 'active'}" href="#/active">Active</a>
            </li>
            <li>
                <a @click.prevent="updateStatus('completed')" :class="{selected:status === 'completed'}" href="#/completed">Completed</a>
            </li>
        </ul>
        <button class="clear-completed" @click="clearCompleted" v-if="completedCount > 0">清除已完成</button>
    </div>
</template>

<script setup>
    import { defineEmits } from 'vue';
    const props = defineProps(['lastLength','status','completedCount']);
    const emit = defineEmits(['updateStatus','clearCompleted']);

    const updateStatus = (status) => {
        emit('updateStatus', status);
    };

    const clearCompleted = () => {
        emit('clearCompleted');
    };
</script>

<style>
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-count {
  font-size: 14px;
}

.todo-count strong {
  font-weight: 300;
  margin: 0 5px;
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.filters li {
  margin: 0 5px;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
}

.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .todo-app {
    width: 90%;
    margin: 20px auto;
  }
  
  .title {
    font-size: 60px;
  }
  
  .new-todo {
    font-size: 18px;
    padding: 12px 12px 12px 50px;
  }
  
  .todo-list li {
    font-size: 18px;
  }
}

.clear-completed {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-size: 14px;
    color: #777;
    cursor: pointer;
}

.clear-completed:hover {
    text-decoration: underline;
    color: #af5b5e;
}
</style>