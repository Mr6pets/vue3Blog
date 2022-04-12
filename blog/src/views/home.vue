<script setup>
  import {ref} from 'vue';

  let name="liu";
  let age="28";

  let handleClick=()=>{
    name="oo"
  }
</script>

<template>
  <div>
    <p>{{name}}-{{age}}</p>
    <button @click="handleClick"></button>
  </div>
</template>

<style>

</style>
