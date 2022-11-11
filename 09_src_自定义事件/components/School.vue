<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>


export default {
    name:'School',
    data(){
        return{
           name:'带专',
           address:'江西九江'
        }
    },
    props:['getSchoolName'],
    methods: {
      sendSchoolName(){
        this.getSchoolName(this.name);
      }
    },
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>