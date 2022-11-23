<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
<br>
<span>全名：{{person.fullName}}</span>
<br>
全名：<input type="text" v-model="person.fullName"><!-- 简写计算属性这里没能计算 -->
</template>

<script>
//vue3 用什么引什么
import { ref, reactive,computed} from "vue";
//引入计算属性 computed
export default {
  name: "Demo",
  setup() {
    //数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
      fullName:''
    })
    // 计算属性 -- 简写(没有考虑计算属性被修改的情况)
    // person.fullName=computed(()=>{
    //   return person.firstName + '-' + person.lastName
    // })

    // 计算属性———完整写法(考虑读和写)
    person.fullName=computed({
      get(){
        return person.firstName + '-' + person.lastName
      },
      set(value){
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    //返回一个对象(常用)
    return {
      person
    };
  },
};
</script>

<style lang="scss" scoped></style>
