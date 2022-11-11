<template>
        <div class="container">
            <Category title="游戏" >
                <template scope="atguigu">
                  <ul>
                  <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                </ul>
                </template>
            </Category>

            <Category title="游戏" >
                <template scope="atguigu">
                  <ol>
                    <li style="color:red;" v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                  </ol>
                  <h4>{{atguigu.msg}}</h4>
                </template>
            </Category>

            <Category title="游戏" >
                <template scope="atguigu">
                  <h4 v-for="(g,index) in atguigu.games" :key="index">{{g}}</h4>
                </template>
            </Category>
        </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  components: { Category},
    name:'App',
   
}
</script>

<style scoped>
  .container,.foot{
    display: flex;/*  */
    justify-content: space-around;/*主轴对齐*/
  }
  video{
    width: 100%;
  }
  

</style>