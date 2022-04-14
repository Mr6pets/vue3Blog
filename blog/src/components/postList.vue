<script setup>
  defineProps({
    post:Array
  })
</script>

<template>
  <div class="postList">
   <p v-for="(item,index) in post" :key="index">{{item.title}}</p>
  </div>
</template>

<style>

</style>
