<script setup>
import {ref} from 'vue';

  defineProps({
    posts:Array
  })
</script>

<template>
  <div>
    {{post}}
  </div>
</template>

<style scoped>

</style>