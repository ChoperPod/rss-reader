<script setup>
import { useFeedStore } from '../stores/store';
const store = useFeedStore();

function handleClick(source) {
    const item = store.sources.find((i) => i === source);
    store.loadSource(item);

}
</script>

<template>
    <div class="sidebar">
        <div v-for="(source, index) in store.sources" :key="index">
            <a href="#" @click.prevent="() => handleClick(source)">{{ source.name }}</a>
        </div>

    </div>
</template>

<style scoped>
.sidebar {
    grid-column-start: 1;
    grid-column-end: 2;
    background-color: #1e4b68;
}

.sidebar a {
    color: #4594cd;
    display: block;
    padding: 5px;
    text-decoration: none;
}

.sidebar a:hover {
    background-color: white;
}
</style>