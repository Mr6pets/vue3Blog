<script setup>
import PostList from '../components/postList.vue';
import EXP_getData from "../composibles/getpost";
import AnimeLoading from "../components/AnimeLoading.vue";
import TagCloud from "../components/Tagcloud.vue"

const {posts,load}= EXP_getData();
load();
  console.log(posts,"000")
</script>

<template>
  <div class="home">
    <div v-if="posts.length>0" class="layout">
      <PostList :posts="posts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <AnimeLoading />
    </div>

  </div>
</template>

<style scoped>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
