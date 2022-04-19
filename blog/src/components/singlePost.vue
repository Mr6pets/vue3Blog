<script setup>
//为了防止body内容过多要用computed来控制下字数
import {computed} from "vue";

const props= defineProps({
  post:Object
})

const snippet=computed(()=>{
  //这样写无法拿到传递进来的值
  // return post.body.substring(0,15)+"...";

  //需要将defineProps用一个变量承接
  return props.post.body.substring(0,300) + "..."
})


</script>

<template>
  <div class="post">
    <h3>{{post.title}}</h3>
    <p>{{snippet}}</p>
  </div>
</template>

<style scope>
  
</style>