<template>
    <div class="latout-header-container">
        <div class="layout-header-left">
            <img class="layout-header-left-img" src="../../assets/logo.png" alt=""></img>
            <h4 class="layout-header-left-title ml-3">商城后台管理系统</h4>
        </div>
        <div class="layout-header-right">
            <button type="button" class="btn btn-light" @click="onLogout">退出</button>
        </div>
    </div>
</template>
<script setup lang="ts" name="MyHeader">
import { useRouter } from 'vue-router';
const router = useRouter()
const onLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>