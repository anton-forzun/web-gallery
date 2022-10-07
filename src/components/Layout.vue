<script setup>
import Header from "./Header.vue";
import Gallery from "./Gallery.vue";
</script>

<template>
  <div class="body">
    <Header />
    <Gallery />
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  min-height: 100vh;
}
</style>