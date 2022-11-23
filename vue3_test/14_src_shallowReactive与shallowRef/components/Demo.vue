<template>
  <h4>当前的x值是: {{x.y}}</h4>
  <button @click="x.y++">点我+1</button>
  <button @click="x={y:888}">点我替换x(shallowRef的响应式是x,深层的y没有响应式)</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}k</h2><!-- <h2>薪资：{{salary}}k</h2> -->
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>  <!-- <button @click="salary++">涨薪</button> -->

</template>

<script>
//vue3 用什么引什么
import { reactive, ref, toReftoRef,toRefs,shallowReactive,shallowRef} from "vue";

export default {
  name: "Demo",
  setup() {
    //数据
    // let person = shallowReactive({//shallowReactive浅层次响应式，只考虑第一层数据的响应式
    let person = reactive({
      name:'张三',
      age:18,
      job:{//shallowReactive浅层次 job里的监视不了
        j1:{
          salary:20
        }
      }
    })
    //shallowRef和 ref一样，基本类型可以响应式,但不能对对象响应式
    // let x=shallowRef(0)//ref(0)
    let x=shallowRef({
      y:0
    })
    console.log('*******',x)//shallowRef里的value是object不是代理数据

    //返回一个对象
    return {
      x,
      person,
      ...toRefs(person)
    };
  },
};
</script>

<style lang="scss" scoped></style>
