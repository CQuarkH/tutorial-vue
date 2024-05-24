<script setup>
import { useAppStore } from '../stores/index';

const appStore = useAppStore();

</script>

<template>
    <h2> {{ appStore.dato }}</h2>

</template>