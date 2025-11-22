<template>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <slot name="header"></slot>
                <th scope="col">#</th>
                <th scope="col">商品名称</th>
                <th scope="col">价格</th>
                <th scope="col">标签</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in goodsList" :key="item.id">
                <slot name="body" :row="item" :index="index"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts" name="MyTable">
const props = defineProps({
    goodsList:{
        type:Array,
        required:true,
        default:[]
    }
})

</script>

<style scoped>

</style>