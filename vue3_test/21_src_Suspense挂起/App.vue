<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense><!---Suspense是内置组件，不需要引入，底层是插槽实现的--->
      <template v-slot:default>
        <!-- 很快的话，就展示这个 -->
        <Child/>
      </template>
      <template v-slot:fallback>
        <!-- 慢的话，就展示这个 -->
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//静态引入
// import Child from './components/Child.vue'//App和Child组件一起出来的
//异步引入
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(()=>import('./components/Child'))//异步调用child组件
//异步引入后，先app组件，接着Child组件，不会等Child加载完成才显示。这样会使得页面有些抖动，所以需要Suspense来解决这个问题
export default {
    name:'App',
    components:{Child},
  }
</script>

<style lang="less" scoped>
.app{
  background-color:gray;
  padding:10px;
}
</style>