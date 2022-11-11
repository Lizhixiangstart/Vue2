<template>
    <div>
        <Student name="理塘丁真" :age='19' sex='男'/>
        <hr>
        <Student name='我测你们码' :age='20' sex='男'/>
    </div>
</template>

<script>
//引入School组件
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        Student
    },
    
}
</script>

<style>

</style>