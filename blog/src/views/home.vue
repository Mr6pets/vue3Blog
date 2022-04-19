<script setup>
  import {ref,reactive,computed,watch,watchEffect} from 'vue';
/**-------------------------------关于ref 和 reactive的区别------------------------------------*/

//定义变量未对象或者为数组
const refData=ref({name:'liu',age:18});
const reactiveData=ref({name:'刘',age:16});
const updateRefData=()=>{
  refData.value.name="liu改刘";
}
const updateReactiveData=()=>{
  reactiveData.name="刘改liu";
}

//定义变量为基本类型
const refDataBase=ref('liu');
const reactiveDataBase=reactive('刘');

// ref 和reactive的区别： 对于对象的调用 reactive不用.value； ref 可以对基本类型和对象和数组进行设置，reactive不能对基本类型改动

/**-----------------------------------------------我是分割线-------------------------------*/
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
