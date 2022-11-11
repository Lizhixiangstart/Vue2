<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    mounted(){
        console.log('About组件挂载完毕了',this);
        window.aboutRoute = this.$route;
        window.aboutRouter=this.$router;
    },
}
</script>

<style>

</style>