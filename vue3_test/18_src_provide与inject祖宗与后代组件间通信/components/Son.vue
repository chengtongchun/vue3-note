<template>
    <div class="son">
      <h3>我是Son组件（孙）</h3>
    </div>
  </template>
  
  <script>//provide提供 inject 注入
  import {inject} from 'vue'
    export default {
      name:'Son',
      setup(){
        let car = inject('car')
        console.log(car,'---Son---');//接收到值，还是个响应式
      }
    }
  </script>
  
  <style lang="less" scoped>
  .son{
    background-color:orange;
    padding:10px;
  }
  </style>