<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为: x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
//vue3 用什么引什么
import {ref,reactive,onMounted,onBeforeMount} from "vue";
import userPoint from '../hooks/usePoint'
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let point=userPoint()
    // let point =reactive({
    //   x:0,
    //   y:0
    // })

    // //方法
    // function savePoint(event){
    //   point.x=event.pageX
    //     point.y=event.pageY
    //     console.log(event.pageX,event.pageY)
    // }
    // onMounted(()=>{//挂载
    //   window.addEventListener('click',savePoint)
    // })

    // onBeforeMount(()=>{//卸载之前
    //   window.removeEventListener('click',savePoint)
    // })
    //返回一个对象
    return {
      sum,point
    };
  },
};
</script>

<style lang="scss" scoped></style>
