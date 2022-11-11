<template>
    <div class="demo">
    <!-- 组件的结构 -->
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    export default {
    // 组件交互相关的代码(数据、方法等等)
     
        name:'School',
        data(){
            return{
                name:"江西",
                address:'九江'
            }
        },
        methods: {
            showName(){
                alert(this.name);
            }
        },
    
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>