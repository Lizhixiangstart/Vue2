<template>
    <div class="app">
        <h1>{{msg}} 学生姓名是:{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props，实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定自定义事件，实现：子给父传递数据 (第一种写法使用@v-on)-->
        <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

        <!-- 第二种写法(使用ref) -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
//引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{
        Student,
        School
    },
    data(){
        return{
            msg:'你好啊!',
            studentName:''
        }
    },
    methods: {
        getSchoolName(name){
            console.log('app收到了学校名：',name)
        },
        getStudentName(name,...a){
            console.log('app收到了学生名：',name,a)
            this.studentName=name;
        },
        m1(){
            console.log('demo事件被触发了')
        },
        show(){
            alert('a');
        }
    },  
    mounted(){
        this.$refs.student.$on('atguigu',name=>{
            this.studentName=name;
        })
    }
    
}
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>