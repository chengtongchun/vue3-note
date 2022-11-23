<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试的数据c:{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改</button>
</template>

<script>
//vue3 用什么引什么
import { ref, reactive } from "vue";
export default {
  name: "App",
  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup() {
    //数据
    let person = reactive({
      name: "张三",
      age: "18",
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });
    //方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "UI设计师";
      person.job.salary = "60k";
      person.job.a.b.c = 999;
      person.hobby[0] = "学习";
    }

    // 返回一个对象(常用)
    return {
      //数据方法必须return出去，不然上面用不了
      person,
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
