<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前得信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}k</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>

</template>

<script>
//vue3 用什么引什么
import { reactive, ref, watch } from "vue";

export default {
  name: "Demo",
  // watch:{
  //   // sum(newValue,oldValue){
  //   //   console.log('sum的值变了'，newValue,oldValue)
  //   // }
  //   sum:{
  //     immediate:true,//立即监视
  //     deep:true,//深度监视
  //     handler(newValue,oldValue){
  //       console.log('sum的值变化了',newValue,oldValue)
  //     }
  //   }
  // },

  setup() {
    //数据
    let sum = ref(0);
    let msg = ref('你好啊')
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //vue3监视
   /*
    // 情况一：监视ref所定义的响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变了", newValue, oldValue);
    // });
    //(2)
     // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变了", newValue, oldValue);
    // },{immediate:true});

    //情况二：监视ref所定义的多个响应式数据
    // (1)可以写多个watch
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变了", newValue, oldValue);
    // });
    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg变了", newValue, oldValue);
    // });
    // (2)
    // watch([sum,msg], (newValue, oldValue) => {
    //   console.log("sum或msg变了", newValue, oldValue);
    // });
    // watch([sum,msg], (newValue, oldValue) => {
    //   console.log("sum或msg变了", newValue, oldValue);
    // },{immediate:true});
    */
    
    /*
    //reactive函数的监视属性：  watch(要的监视数据,新数据和旧数据,监视配置)
      情况三：监视reactive所定义的一个响应式数据的全部数据，
        1.注意：此处无法正确的获取oldValue//新旧数据一样
        2.注意：强制开启了深度监视（deep配置无效）
    */
    /* watch(person,(newValue,oldValue)=>{
       console.log('person变化了',newValue,oldValue)
     },{deep:false})//此处的deep配置无效
    */
    
    // 情况四：监视reactive所定义的一个响应式数据中的某个数据
    /*watch(()=>person.age,(newValue,oldValue)=>{
      console.log('person的age变化了',newValue,oldValue)
    })*/

    // 情况五：监视reactive所定义的一个响应式数据中的某些数据
    // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
    //   console.log('person的age和name变化了',newValue,oldValue)
    // })

    //特殊情况  //拿不到旧的值
    watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
    },{deep:true})//这种情况不手动开启深层监测是没有变化的
    //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效
    
    //返回一个对象
    return {
      sum,
      msg,
      person
    };
  },
};
</script>

<style lang="scss" scoped></style>
