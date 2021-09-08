<template>
  <nav class="p-5 bg-green-400 text-white mb-10">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
<<<<<<< HEAD
    <div v-if="isLoading" >Loading...</div>
  </div>
</template>

<script setup>
import usePageRequests from './composables/usePageRequests'
const {isLoading} = usePageRequests()
</script>
=======
  </div>
</template>

<script setup></script>
>>>>>>> 91cf2b2 (boilerplate code for 2nd chapter example blog)
<style lang="css">
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
