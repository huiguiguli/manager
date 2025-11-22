<template>
    <div class="login-container">
        <div class="login-box">
            <!--头像区域-->
            <div class="avatar-box">

            </div>
            <!--表单区域-->
            <div class="form-login">
                <div class="form-group">
                    <label for="username">登录名称: </label>
                    <input type="text"
                        class="form-control"
                        id="username"
                        placeholder="请输入登录名称"
                        autocomplete="off"
                        v-model.trim="username"/>
                </div>
                <div class="form-group">
                    <label for="password">登录密码: </label>
                    <input type="password"
                        class="form-control"
                        id="password"
                        placeholder="请输入登录密码"
                        v-model="password"/>
                </div>
                <div class="form-group">
                    <button type="button" class="btn" @click="onLogin">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Login">
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const router = useRouter()
const onLogin = () => {
    if(username.value == 'admin' && password.value === '123456'){
        router.push('/home')
        return localStorage.setItem('token','Bearer xxx')
    }else{
        alert('用户名或密码输入错误')
        localStorage.removeItem('token')
    }
}
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  width: 350px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-item {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.form-item label {
  width: 80px;
}

.form-item input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>