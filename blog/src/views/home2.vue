<script setup>
import PostList from '../components/postList.vue'
import {ref,reactive,computed,watch,watchEffect} from 'vue';
  const posts=ref([
    {title:"这是列表里的第一个参数",body:'这里只是内容的区域这里只是内',id:1},
    {title:"这是列表里的第二个参数",body:'这里只是内容的区域这里只是内容的区域',id:2},
    {title:"这是列表里的第三个参数",body:'这里只是内容的区域这里只是内容的区域这里',id:3},
    {title:"这是列表里的第四个参数",body:'这里只是内容的区域这里只是内容的区域这里只是内',id:4},
    {title:"这是列表里的第五个参数",body:'这里只是内容的区域这里只是内容的区域这里只是内容的区域',id:5}
  ])
</script>

<template>
  <div class="homeApp">
    <PostList :post="posts"/>

  </div>
</template>

<style>

</style>
