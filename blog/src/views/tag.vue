<script setup>
  import getposts from "../composibles/getpost"
  import {useRoute} from 'vue-router';
  import {computed} from "vue";
  import PostList from '../components/postList.vue'
  const route=useRoute();

  const {posts,load} =getposts();
  load();
  
  const withTag=computed(()=>{
    return posts.value.filter((p)=> p.tags.includes(route.params.item))
  })
</script>

<template>
  <div class="tag">
    <div v-if="posts.length">
      <PostList :posts="withTag" />
    </div>
  </div>
</template>
<style scoped>

</style>