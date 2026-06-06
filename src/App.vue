<template>
  <div class="app">
    <NavBar />
    <main class="page">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from './app/components/organisms/NavBar/NavBar'
import Footer from './app/components/organisms/Footer/Footer'
</script>
