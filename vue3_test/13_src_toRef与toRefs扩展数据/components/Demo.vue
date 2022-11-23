<template>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}k</h2><!-- <h2>薪资：{{salary}}k</h2> -->
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>  <!-- <button @click="salary++">涨薪</button> -->

</template>

<script>
//vue3 用什么引什么
import { reactive, ref, toReftoRef,toRefs} from "vue";

export default {
  name: "Demo",
  setup() {
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

    // const name1=person.name
    // console.log("%%%",name1)
    //(1)(2)(3)例子的
    // const name2=toRef(person,'name')
    // console.log('###',name2)
    //(4)toRefs 
    // const x=toRefs(person)
    // console.log('**********',x)
    //返回一个对象
    return {
      person,
      // (1)这样写会失去响应式
      //#region 
     /* name:person.name,
      age:person.age,
      salary:person.job.j1.salary*/
      //#endregion
      
      //(2)这个改的不是原person的内容了,能改，但是是新的了，旧的不变，与原数据无关。
      //#region 
      // name:ref(person.name),
      // age:ref(person.age),
      // salary:ref(person.job.j1.salary)
      //#endregion
      
      //(3)toRef()和原数据一起改动，响应式
      //#region 
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')
      //#endregion
      
      //(4)toRefs() 是toRef的升级版 可以一下子处理多个
      ...toRefs(person)//toRefs只拆一层，job里面的不拆出来，引用salary还得job.j1.salary
    };
  },
};
</script>

<style lang="scss" scoped></style>
