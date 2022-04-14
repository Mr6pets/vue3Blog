<script setup>
  import {ref,reactive,computed,watch,watchEffect} from 'vue';

  const names=ref([
    {name:"11"},
    {name:"22"},
    {name:"33"},
    {name:"44"}
  ]);
  const search=ref("");
  const matchNames=computed(()=>{
    return names.value.filter(item=>item.name.includes(search.value));
  });
  //基本的watch的使用(告诉watch 监听的是什么值)-监听一组数值
  // watch(search,(newSearch,prevSearch)=>{
  //   console.log("watch监听一组触发了",newSearch,prevSearch);
  // });

  //监听多组参数
  // watch([search,names],([newSearch,newNames],[prevSearch,prevNames])=>{
  //   console.log("watch监听了多组触发了",newSearch,prevSearch,newNames,prevNames);
  // })

//watchEffect的初始化会执行一次，里面不用传参数，但是函数中只要用到了一些data中值 就会执行
  // watchEffect(()=>{
  //   console.log("watchEffect触发了",search.value)
  // });


  // 停止监听的方法()
  const stopWatch= watch(search,(newSearch,prevSearch)=>{
    console.log("watch监听一组触发了",newSearch,prevSearch);
  });
  const stopEffect= watchEffect(()=>{
    console.log("watchEffect触发了",search.value)
  });
  const handleClick=()=>{
    stopWatch();
    stopEffect();
  }

</script>

<template>
  <div class="homeApp">
    <input type="text" v-model="search"/>
    <button @click="handleClick">stop watch</button>
    <p v-for="(item,index) in matchNames" :key="index">{{item.name}}</p>
  </div>
</template>

<style>

</style>
