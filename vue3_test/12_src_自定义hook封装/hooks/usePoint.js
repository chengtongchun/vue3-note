import {reactive,onMounted,onBeforeMount} from "vue";

export default function savePoint() {
  //实现鼠标"打点"的相关数据
  let point = reactive({
    x: 0,
    y: 0,
  });
  //实现鼠标"打点"的相关方法
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }
  //实现鼠标"打点"的生命钩子
  onMounted(() => {
    //挂载
    window.addEventListener("click", savePoint);
  });

  onBeforeMount(() => {
    //卸载之前
    window.removeEventListener("click", savePoint);
  });
  return point
}

