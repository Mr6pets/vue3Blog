<script setup>
import PostList from '../components/postList.vue'
import {ref,reactive,computed,watch,watchEffect} from 'vue';
  const posts=ref([
    {title:"这是列表里的第一个参数",body:'这是列表里的第一个参数',id:1},
    {title:"这是列表里的第二个参数",body:'这是列表里的第一个参数这是列表里的第一个参数',id:2},
    {title:"这是列表里的第三个参数",body:'这是列表里的第一个参数这是列表里的第一个参数这是列表里的第一个参数',id:3},
    {title:"这是列表里的第四个参数",body:'这是列表里的第一个参数这是列表里的第一个参数这是列表里的第一个参数这是列表里的第一个参数',id:4},
    {title:"这是列表里的第五个参数",body:'I am a first-year student of China university of geosciences. My name is lu Yang and I am studying in the management science and engineering major of the university of humanities and economics. Came to the university, I feel everything is full of novelty, came to the capital, in particular, I fully felt the strong atmosphere of a volunteer there, affected by the volunteer activities, I think, is one of the people are very good things.',id:5}
  ])
</script>

<template>
  <div class="homeApp">
    <PostList :posts="posts"/>

  </div>
</template>

<style>

</style>
