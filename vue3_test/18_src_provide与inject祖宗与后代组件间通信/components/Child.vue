<template>
    <div class="child">
      <h3>我是Child组件（子）</h3>
      <Son/>
    </div>
  </template>
  
  <script>//provide提供 inject 注入
    import {inject} from 'vue'
    import Son from './Son.vue'
    export default {
      name:'Child',
      components:{Son},
      setup(){
        let x = inject('car')
        console.log(x,'---Child---')//也能收到值，但我们一般用props来父子传值
      }
    }
  </script>
  
  <style lang="less" scoped>
  .child{
    background-color:skyblue;
    padding:10px;
  }
  </style>