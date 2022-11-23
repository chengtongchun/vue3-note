<template>
  <h4>当前求和为: {{sum}}</h4>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}k</h2>
  <!-- <h2>座驾信息: {{car}}</h2> -->
  <h2 v-show="person.car">座驾信息: {{person.car}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button> 
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="changePrice">换价格</button>
</template>

<script>
//vue3 用什么引什么
import { reactive, ref,toRefs,toRaw, markRaw} from "vue";

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

    function showRawPerson(){
      // const sum=toRaw(sun);
      // console.log(sum);//undefined//说明toRaw不能让ref的响应式变回源数据

      const p=toRaw(person);
      p.age++;//界面没反应
      console.log(p)
      return p
    }

    function addCar(){
      let car ={name:'奔驰',price:40}
      // person.car=car
      person.car=markRaw(car)//之后car永远变不了响应式数据
      //以后当原始数据在用了

    }

    function changePrice(){
      person.car.price++
      console.log(person.car.price)
    }

    //返回一个对象
    return {
      sum,
      person,//用来这个才检测到 addCar里追加的汽车信息
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice
    };
  },
};
</script>

<style lang="scss" scoped></style>
