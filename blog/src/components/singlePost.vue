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
    <router-link :to="{name:'Detail',params:{id:post.id}}">
      <h3>{{post.title}}</h3>
    </router-link>
    <p>{{snippet}}</p>
    <span v-for="(tag,index) in post.tags" :key="index">{{tag}}</span>
  </div>
</template>

<style >
.post{
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3{
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
}
</style>