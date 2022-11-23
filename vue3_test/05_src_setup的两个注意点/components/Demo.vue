<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
//vue3 用什么引什么
import { ref, reactive } from "vue";

export default {
  name: "Demo",
  beforeCreate() {
    console.log("---beforeCreate---");
  },
  props: ["msg", "school", "a"],
  emits:['hello'],//需要用emits告知绑定了hello事件，不然会警告
  setup(props,context) {//外面没有props:[]的话，setup(props)里接收会收到警告
    //比beforeCreate前
    // console.log("----setup----", props); //Proxy {msg: '你好啊', school: '尚硅谷', a: undefined}
    console.log("----setup----", context);
    // console.log("----setup----", context.attrs);//相当于vue2中的$attrs
    // console.log("----setup----", context.emit);//触发自定义事件的
    // console.log("----setup----", context.slots);//插槽

    //数据
    let person = reactive({
      name: "张三",
      age: "18",
    })

    // 方法
    function test(){
      context.emit('hello',666)
    }
    return {
      person,
      test
    };
  },
};
</script>

<style lang="scss" scoped></style>
