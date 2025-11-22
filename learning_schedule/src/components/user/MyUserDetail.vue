<template>
    <button @click="goBack">后退</button>
    <h4>用户{{ id }}的详情页面</h4>
</template>

<script setup name="MyUserDetail" lang="ts">
import { useRouter } from 'vue-router';
const props = defineProps({
    id:String
})
const router = useRouter()
const goBack = () => {
    router.back()
}
</script>