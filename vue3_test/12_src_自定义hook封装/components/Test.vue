<template>
    <h2>我是Test组件</h2>
    <h2>当前点击时鼠标的坐标为: x:{{point.x}},y:{{point.y}}</h2>

</template>

<script>
import userPoint from '../hooks/usePoint'

export default {
    name:'Test',
    setup () {
        const point=userPoint()
        return {point}
    }
}
</script>

<style lang="scss" scoped>

</style>