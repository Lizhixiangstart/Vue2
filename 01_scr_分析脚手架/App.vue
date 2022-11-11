<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School></School>
    <Student></Student>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: 'App',
  components: {
    School,
    Student
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
