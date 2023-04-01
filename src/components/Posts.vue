<script setup>
import { useFeedStore } from '../stores/store';

const store = useFeedStore();
</script>

<template>
    <div class="main">
        <h1 v-if="store.current.source">{{ store.current.source.name }}</h1>
        <details v-for="post in store.current.items" :key="post.title">
            <summary>{{ post.title }}</summary>
            <div v-html="post.content"></div>
        </details>
    </div>
</template>

<style scoped></style>