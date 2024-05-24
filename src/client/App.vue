<script setup>
import ParentComponent from './components/ParentComponent.vue';
import PiniaComponent from './components/PiniaComponent.vue';

</script>

<template>
   <PiniaComponent />
   <ParentComponent />
</template>

<style scoped>
.logo {
   height: 6em;
   padding: 1.5em;
   will-change: filter;
   transition: filter 300ms;
}

.logo:hover {
   filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
   filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
