<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
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
    mounted(){
      this.$on('$bus',(data)=>{
        console.log('我是School组件，收到了数据',data)
      })
    },
    beforeDestroy(){
      this.$off('hello')
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>