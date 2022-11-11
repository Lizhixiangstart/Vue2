<template>
        <div id="app">
            <div class="container">
              <Search/>
              <List/>
            </div>
        </div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'
export default {
  components: { Search ,List},
    name:'App',
    
    
}
</script>

<style scoped>
 

</style>