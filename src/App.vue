<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <RouterView />

  <RouterView name="about" />
  <RouterView name="portfolio" />
  <RouterView name="testimonials" />
  <RouterView name="contact" />
  <RouterView name="footer" />
</template>
