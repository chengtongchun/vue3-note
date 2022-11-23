<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup() {
    //数据
    let name = ref("张三");//ref把括号里面的东西变成响应式
    let age = ref(18);
    let job=ref({
      type:'前端工程师',
      salary:'30k'
    })
    //方法
    function changeInfo() {
      name.value = "李四";
      age.value = 48;

      job.value.type='UI设计师'
      job.value.salary="60k"
      console.log(name, age,job.value);
    }

    // 返回一个对象(常用)
    return {
      //数据方法必须return出去，不然上面用不了
      name,
      age,
      job,
      changeInfo,
    };

  },
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
