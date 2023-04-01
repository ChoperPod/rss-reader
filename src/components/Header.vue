<script setup>
import { ref } from 'vue';
import { useFeedStore } from "../stores/store"

const url = ref('');
const store = useFeedStore();

function handleSubmit() {
    if (!!url.value) {
        store.registerNewSource(url.value)
    }
}
</script>

<template>
    <div class="header">
        <form action="" @submit.prevent="handleSubmit">
            <input type="url" required v-model="url" />
            <button type="submit">Add Source</button>
        </form>

    </div>
</template>

<style scoped></style>