<template>
    <div class="demo">
    <!-- 组件的结构 -->
        <h2>学生名称:{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
    // 组件交互相关的代码(数据、方法等等)
     
        name:'Student',
        data(){
            return{
                name:"理塘丁真",
                age:50
            }
        },
        methods: {
            showName(){
                alert(this.name);
            }
        },
    
    }
    
</script>
