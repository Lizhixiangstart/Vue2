<template appear>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
        <h1 v-show="isShow" key="1" >理塘</h1>
        <h1 v-show="!isShow" key="2">丁真</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
/* 进入的起点、离开的终点*/
/* .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}
.hello-enter-active,.hello-leave-active{
    transition: 1s linear;
} */
/* 进入的终点、离开的起点 */
/* .hello-enter-to,.hello-leave{
    transform:translateX(0);
} */
/* .hello-enter-active{
    animation: atguigu 1s linear;
}
.hello-leave-active{
    animation: atguigu 1s  reverse linear;
} */

/* 方式一 */
    .hello-enter-active{
      animation:  atguigu 1s linear;
    }
    .hello-leave-active{
      animation: atguigu 1s  linear reverse;
    }
/* 定义动画(来时动画) */
    @keyframes atguigu{
      from{
        transform: translateX(-100%);
      }
      to{
        transform: translateX(0px);
      }
    }

/* 方式二 */
    /* .hello-enter,.hello-leave-to{
      transform: translateX(-100%);
    }
    .hello-enter-to,.hello-leave{
      transform: translateX(0px);
    }
    .hello-enter-active,.hello-leave-active{
      transition: 1s linear;
    } */




h1{
  background: skyblue;
  
}

    

/* 定义动画 atguigu */
@keyframes atguigu {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>