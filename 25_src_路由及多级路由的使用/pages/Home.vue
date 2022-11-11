<template>
             <div>
              <h2>Home组件内容</h2>
              <router-link class="list-group-item " active-class="active"  to="/home/message">Message</router-link>
              <router-link class="list-group-item " active-class="active"  to="/home/news">News</router-link>

                  <div class="col-xs-6">
                  <div class="panel">
                    <div class="panel-body">
                      <!-- 指定组件的呈现位置 -->
                      <router-view></router-view>
                    </div>
                  </div>
                </div>
            </div>     
</template>

<script>
import Message from './Message.vue'
import News from './News.vue'
export default {
    name:'Home',
    mounted(){
        console.log('Home组件挂载完毕了',this);
        window.aboutRoute = this.$route;
        window.aboutRouter=this.$router;
    },
    components:{
      Message,
      News,
    }
}
</script>

<style>

</style>