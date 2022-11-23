<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
//vue3 用什么引什么
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";

export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    
    //用过组合式API的形式去使用生命周期钩子
    onBeforeMount(()=>{
      console.log('---onbeforeMount---')
    })
    onMounted(()=>{
      console.log('---onbeforeMount---')
    })
    onBeforeUpdate(()=>{
      console.log('---onBeforeUpdate---')
    })
    onUpdated(()=>{
      console.log('---onUpdated---')
    })
    onBeforeUnmount(()=>{
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(()=>{
      console.log('---onUnmounted---')
    })
    //返回一个对象
    return {
      sum
    };
  },
  //通过配置项的形式使用生命周期钩子
  //#region 
  // beforeCreate(){
  //   console.log('---beforeCreate---')
  // },
  // created(){
  //   console.log('---create---')
  // },
  // beforeMount(){
  //   console.log('---beforeMount---')
  // },
  // mounted(){
  //   console.log('---mounted---')
  // },
  // beforeUpdate(){
  //   console.log('---beforeUpdate---')
  // },
  // updated(){
  //   console.log('---update---')
  // },
  // beforeUnmount(){
  //   console.log('---beforeUnmount---')
  // },
  // unmounted(){
  //   console.log('---unmounted---')
  // }
  //#endregion
};
</script>

<style lang="scss" scoped></style>
