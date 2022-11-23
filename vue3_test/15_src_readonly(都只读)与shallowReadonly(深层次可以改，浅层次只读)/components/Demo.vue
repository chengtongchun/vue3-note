<template>
  <h4>当前求和为: {{sum}}</h4>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button> 

</template>

<script>
//vue3 用什么引什么
import { reactive, ref,toRefs,readonly,shallowReadonly} from "vue";

export default {
  name: "Demo",
  setup() {
    let sum=ref(0)
    //数据
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //readonly都只读 shallowReadonly浅层次只读 深层次可以改

    // person =readonly(person)
    //sum=readonly(sum)也是只读
    person =shallowReadonly(person)
    //返回一个对象
    return {
      sum,
      ...toRefs(person)
    };
  },
};
</script>

<style lang="scss" scoped></style>
