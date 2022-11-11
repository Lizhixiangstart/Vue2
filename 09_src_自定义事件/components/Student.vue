<template>
  <div class="student">
    <h2 >学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例对象</button>
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
    methods:{
      sendStudentName(){
        //触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name,666,888,900);
        this.$emit('demo');
      },
      unbind(){
        // this.$off('atguigu');//解绑一个自定义事件
        // this.$off(['atguigu','demo']);//解绑多个自定义事件
        this.$off();//解绑所有的自定义事件

      },
      death(){
        this.$destroy()//销毁了当前的Student组件实例
      }
    }
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