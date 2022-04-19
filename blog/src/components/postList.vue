<script setup>
import {onMounted,onUnmounted,onUpdated} from "vue";
import SinglePost from "../components/singlePost.vue";

onMounted(()=>{
  console.log('页面渲染之前执行，执行完毕，页面就有了');
  //基本用于数据请求，同样 也可以在watchEffect()中放数据请求 
})

onUnmounted(()=>{
  console.log("组件注销之前执行，执行完毕组件就不在页面显示了")
  /**可以销毁掉类似 better-scroll 的三方插件*/
})

onUpdated(()=>{
  console.log("当组件内容发生变化，就会执行这个钩子函数")
})

  defineProps({
    posts:Array
  })
</script>

<template>
  <div>
   <p v-for="(item,index) in posts" :key="index">
     <SinglePost :post=item />
   </p>
  </div>
</template>

<style>

</style>
