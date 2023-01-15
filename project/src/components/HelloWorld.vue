<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>

  <div id="nav">
    <router-link to="/login">Login</router-link> |
    <router-link to="/error">Error</router-link>
  </div>
  <router-view/>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
