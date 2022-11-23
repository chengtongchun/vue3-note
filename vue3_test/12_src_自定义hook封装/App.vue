<template>
  <button @click="isShowDemo=!isShowDemo">切换隐藏/显示</button>
 <Demo v-if="isShowDemo"/>
 <hr>
 <Test/>
</template>

<script>
import {ref} from 'vue'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
export default {
  name: "App",
  components:{Demo,Test},
  setup(){
    let isShowDemo=ref(true)
    return {
      isShowDemo
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
