<script setup>
import {ref} from 'vue';
const tags=ref([]);
const tagSet=new Set();

const props= defineProps({
  posts:Array
})
props.posts.forEach(item=>{
  item.tags.forEach(tag=>{
    tagSet.add(tag);
  })
})
tags.value=[...tagSet];
</script>

<template>
  <div class="tag-cloud">
    <h3>标签</h3>
    <div v-for="(item,index) in tags" :key="index">
      <router-link :to="{name:'TagCloud', params:{item}}"> #{{item}}</router-link>
      </div>
    
  </div>
</template>

<style scoped>

.tag-cloud{
  padding: 10px;
}
.tag-cloud h3{
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div{
  display: inline-block;
  padding: 10px;
}
.tag-cloud a{
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active{
  color: #ff8800;
  font-weight: bold;
}
</style>