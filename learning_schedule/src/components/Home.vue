<template>
    <div class="home-container">
        <my-header></my-header>
        <div class="home-main-box">
            <my-aside></my-aside>
            <div class="home-main-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" name="Home">
    import MyHeader from './subcomponents/MyHeader.vue'
    import MyAside from './subcomponents/MyAside.vue'

</script>