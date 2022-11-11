<template>
  <div class="student">
    <h2 >学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>


export default {
    name:'Student',
    data(){
        return{
           name:'理塘丁真',
           sex:'男'
        }
    },
    mounted(){
      // console.log('Student',this.x);
    },
    methods: {
      sendStudentName(){
        this.$emit('hello',this.name);
      }
    },
}
</script>

<style lang="less">
 .student{
  background-color: orange;
  padding: 5px;
  margin-top: 20px;
  .atguigu{
    font-size: 40px;
  }
 }
</style>