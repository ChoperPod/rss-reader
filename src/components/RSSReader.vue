<script setup>
import Header from './Header.vue'
import Sidebar from './SideBar.vue'
import Posts from './Posts.vue'
</script>

<template>
    <Header></Header>
    <div class="main-container">

        <Sidebar></Sidebar>
        <Posts></Posts>
    </div>
</template>

<style scoped>
.main-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "header header"
        "sidebar main";
    height: 100vh;
}
</style>