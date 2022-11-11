<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h3>放大10倍求和为{{bigSum}}</h3>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3 style="color:red">Person组件的总人数是{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求s和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
               
                n:1//用户选择的数字
            }
        },
        computed:{
           /*  sum(){
                return this.$store.state.sum;
            },
            school(){
                return this.$store.state.school;
            },
            subject(){
                return this.$store.state.subject;
            }, */
           /*  bigSum(){
                return this.$store.getters.bigSum;
            }, */
            //借助mapState生成计算属性，从state中读取数据。(对象写法)
            // ...mapState({sum:'sum',bigSum:'bigSum',school:'school',subject:'subject'}),

            //借助mapState生成计算属性，从state中读取数据。(数组写法)
            ...mapState('countAbout',['sum','school','subject',]),
            ...mapState('personAbout',['personList',]),

            //借助mapGetters生成计算属性，从getters中读取数据(对象写法)
            // ...mapGetters({bigSum:'bigSum'}),
            //借助mapGetters生成计算属性，从高getters中读取数据(数组写法)
            ...mapGetters('countAbout',['bigSum'])
        },
        methods:{
            /* increment(){
                this.$store.commit('JIA',this.n);
            },
            decrement(){
                this.$store.commit('JIAN',this.n);
            }, */

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
            // ...mapMutations(['JIA','JIAN']),

            /* *********************** */

            //程序员亲自写方法
            /* incrementOdd(){
                
                this.$store.dispatch('jiaOdd',this.n);
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.n);
            } */
            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
            //借助mapActions生成对应方法，方法中会调用dispatch去联系actions(数组写法)
            ...mapActions('countAbout',['jiaOdd','jiaWait']),
        },
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>

