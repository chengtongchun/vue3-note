<template>
  <div class="app">
    <h3>我是App组件</h3>
    <TransitionGroup name="list">
      <li v-for="(r,index) in state.roles" :key="index">
        {{r.name}}--{{r.wuqi}}--{{r.yunsu}}
      </li>
    </TransitionGroup>
  </div>
</template>

<!-- <script >
import { reactive } from 'vue';
export default{
  setup(){
    let roles=reactive([
    {name:'荧',wuqi:'单手剑',yunsu:'草'},
    {name:'雷电将军',wuqi:'长柄武器',yunsu:'雷'},
    {name:'胡桃',wuqi:'长柄武器',yunsu:'火'}
  ])
    return {
      roles
    }
  } 
} -->
<script setup>
import {reactive} from 'vue'
let state=reactive({
  roles:[
    {name:'荧',wuqi:'单手剑',yunsu:'草'},
    {name:'雷电将军',wuqi:'长柄武器',yunsu:'雷'},
    {name:'胡桃',wuqi:'长柄武器',yunsu:'火'}
  ]
})
</script>

<style lang="less" scoped>
.app{
  background-color:gray;
  padding:10px;
}
//进入/离开 TransitionGroup
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>