## 关于不同版本的Vue ##

### 1.Vue.js与vue.runtime.xxx.js的区别 
```markdown
(1)vue.js是完整版的vue，包含：核心功能+模板解析器
(2)Vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
```
###

## ref属性

### 1.被用来给元素或子组件引用信息(id的替代者)

### 2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象(vc)

### 3.使用方式：
```markdown
打标识：<h1 ref="xxx">...</h1>或<school ref="xxx"></school>
获取:this.xxx
```

## 配置项props
```markdown
|功能：让组件接收外部传过来的数据
    |（1）传递数据：
            <Demo name="xxx">
    |（2）接收数据：
            第一种方式(只接收)：
                props：['name']
            第二种方式（限制类型）
                props：{
                    name：String 
                }    
            第三种方式（限制类型、限制必要性、指定默认参数）
            props：{
                name：{
                    type：String，
                    required：true，
                    default："defaultValue"
                }
            }
备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data
的数据
```



## mixin(混入)
```markdown
功能：可以把多个组件共用的配置项提取成一个混入对象
使用方式：
    第一步定义混合，例如：
        {
            data(){...},
            methods:{...}
        }
    第二部使用混入，例如：
        (1)全局混入：Vue.mixin(xxx)
        (2)局部混入：mixins:[xxx]
```

## 插件
```markdown
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数时Vue，第二个以后的参数是插件使用者传递的数据。
定义插件：
    对象.install = function(Vue,options){
        //1.添加全局过滤器
        Vue.filter(...)

        //2.添加全局指令
        Vue.directive(...)

        //3.配置全局混入(合)
        Vue.mixin(...)

        //4.添加实例方法
        Vue.prototype.$myMethod = function(){...}
        Vue.prototype.$myProperty=xxx
    }            
```

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## TodoList案例
```markdown
1.组件化编码流程：
    (1)拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突

    (2)实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用。
            1)一个组件在用，放在组件自身即可
            2)一些组件在用，放在它们共同的父组件上(<span style="color:red">状态提升</span>)

    (3)实现交互：从绑定事件开始

2.propers适用于：
    (1)父组件==>子组件 通信
    (2)子组件==>父组件 通信(要求父先给子一个函数)

3.使用v-model时要切记；v-model绑定的值不能是peops传过来的值，因为props时不可以修改的

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做
```

## 组件自定义事件
```markdown
1.一种组件间通信的方式，适用于 子组件==>父组件
2.使用场景：A是父组件,B是子组件，B想给A传递数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)
3.绑定自定义事件：
    1.第一种方式：在父组件中:<Demo @atguigu="test">或<Demo v-on:atguigu="test">
    2.第二种方式：在负组件中
    <Demo ref="demo">
    .................
    mounted(){
        this.$refs.xxx.$on('atguigu',this.test)
    }
    3.若想让自定义事件只能触发一次，可以使用事件修饰符once或$.once方法
4.触发自定义事件：this.$emit('atguigu',数据)
5.解绑自定义事件this.$off('atguigu')
6.组件上也可以绑定原生DOM事件，需要使用.native修饰符
7.注意：通过this.$refs.xxx.$on('atguigu',回调)，绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题
```

## 全局事件总线
```markdown
1.一种组件间通信的方式，适用于任意组件间通信
2.安装全局事件总线：
    new Vue({
        ...
        beforeCreate(){
            Vue.prototype.$bus=this//安装全局事件总线,$bus就是当前应用的vm
        }
    })
```

## 消息发布与订阅(pubsub)
```markdown
1.一种组件间通信的方式，适用于任意组件间通信
2.使用步骤：
    1.安装pubsub：npm i pubsub-js
```j                                   

## nextTick
```markdown
1.语法：this.$nextTick(回调函数)
2.作用：在下一次DOM更新结束后执行其回调函数
3.什么时候调用：当改变数据后，要基于更新的新DOM进行某些操作时，要在nextTick所只当的回调函数中执行
```

## Vue脚手架配置代理
```markdown
方法一：
    在Vue.config.js中添加如下配置
    devServer:{
        proxy:'http://localhost:5000'
    },
说明：
    1.优点：配置简单，请求资源时直接发给前端(8080)即可
    2.缺点：不能配置多个代理，不能灵活的控制是否代理
    3.工作方式：若按照上述配置，当请求了前端不存在额资源时，那么该请求会转发给服务器(优先匹配前端资源)

方法二：
    编写Vue.config.js配置具体代理规则：
        devServer:{
            proxy:{
                '/atguigu':{
                    target:'http://localhost:5000',
                    pathRewrite:{'^/atguigu':''},
                    ws:true,//用于支持websocket
                    changeOrigin:false//用于控制请求头中的host值
                },
                '/demo':{
                    target:'http://localhost:5001',
                    pathRewrite:{'^/demo':''},
                    ws:true,
                    changeOrigin:true
                }
            }
        }
        /* 
        changeOrigin设置为true时，服务器接收到的请求头中host为:localhost:5000
        changeOrigin设置为false时，服务器接收到的请求头中host为:localhost:8080
        changeOrigin默认值为true
        *

## 插槽
```markdown
    1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件===>子组件。
    2.分类：默认插槽、具名插槽、作用域插槽
    3.使用方式：
        1.默认插槽：
            父组件中：
            <Category>
                <div>html结构<div>
            </Category>
            子组件中：
            <template>
                <div>
                    <slot>插槽默认内容...</slot>
                </div>
            </template>
        2.具名插槽：
            父组件中：
                <Catehory>
                    <template slot="center">
                        <div>html结构</div>                    
                    </template>

                    <template v-slot="footer">
                        <div>html结构</div>
                    </template>
            子组件中：
                <template>
                    <div>
                    <slot name="center">默认插槽内容...</slot>
                    <slot name="footer">默认插槽内容...</slot>
                    </div>
        3.作用域插槽：
            1.理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。(games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定)
            2.具体编码：
                父组件中：
                    <Category>
                        <template scop="scopeData">
                            <ul>
                                <li v-for="g in scopeData.games" :key="h">{{g}}</>
                            </ul>
                        </template>
                    </Category>
                子组件中：
                    <template>
                        <slot :games="games"></slot>
                    </template>

                    <script>
                        export default {
                            name:'Category',
                            props:['title'],
                            data() {
                                return {
                                    games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                                }
                            },
                        }
                    </script>

## Vuex(集中式数据管理)
```markdown
    1.引入数据、配置actions、配置mutations，操作文件store.js
        import Vue from 'vue'
            //引入Vuex
            import Vuex from 'vuex'
            //使用Vuex插件
            Vue.use(Vuex)
            //准备actions，用于响应组件中的动作
            const actions={
                jia(context,value){
                console.log("actions中jia被调用了",context,value) ;
                context.commit('JIA',value);
                },
                jian(context,value){
                    console.log('actions中jian被调用了',context,value);
                    context.commit('JIAN',value);
                },
                jiaOdd(context,value){
                    console.log("actions中jiaOdd被调用了",context,value) ;
                    if(context.state.sum%2){
                        context.commit('JIA',value);
                    }
                },
                jiaWait(context,value){
                    setTimeout(()=>{
                        context.commit('JIA',value);
                    },500)
                }


            }
            //准备mutations，用于操作数据
            const mutations={
                JIA(state,value){
                    // console.log('mutations中jia被调用了',state,value);
                    state.sum+=value;
                },
                JIAN(state,value){
                    state.sum-=value;
                }
            }
            //准备state，用于存储数据
            const state={
                sum:0,//当前的和
            }
            //创建并暴露store
            export default new Vuex.Store({
                // ...
                actions,
                mutations,
                state,
            })
    2.组件中读取vuex中的理想：$store.state.sum
    3.组件中修改vuex中的数据：$store.dispatch('actions中的方法名',数据)或$store.commit('mutations中方法名',数据)
    备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit
                    
## getters的使用
```markdown
    1.概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
    2.在store.js中追加getters配置
        const getters={
        bigSum(state){
            return state.sum*10
            
            }
        }
        //创建并暴露store
        export default new Vuex.Store({
            // ...
            actions,
            mutations,
            state,
            getters
        })
    3.组件中读取数据：$store.getters.bigSum

## 四个map方法的使用
```markdown
    1.mapState方法：用于帮助我们映射State中数据为计算属性
        computed:{
            //借助mapState生成计算属性，从state中读取数据。(对象写法)
            ...mapState({sum:'sum',bigSum:'bigSum',school:'school',subject:'subject'}),
            //借助mapState生成计算属性，从state中读取数据。(数组写法)
            ...mapState(['sum','school','subject']),
        }
    2.mapGetters方法：用于帮助我们映射getters中的数据为计算属性
        computed:{
            //借助mapGetters生成计算属性，从getters中读取数据(对象写法)
             ...mapGetters({bigSum:'bigSum'}),
            //借助mapGetters生成计算属性，从高getters中读取数据(数组写法)
            ...mapGetters(['bigSum'])
        }
    3.mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.disaptch(xxx)的函数
        methods:{
            //靠mapActions生成，incrementOdd、incrementWait(对象形式)
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

            //靠mapActions生成：incrementOdd、incrementWait(数组形式)
            ...mapActions(['incrementOdd','incrementWait'])
        }
    4.mapMutations方法：用于帮助我们生成mutations对胡的方法，即：包含$store.commit(xxx)
        methods:{
            //靠mapAction生成，increment、decrement(对象形式)
            ...mapMutations({increment:'JIA',decrement:'JIAN'})

            //靠mapMutations生成，JIA、JIAN(对象形式)
        }

## 模块化+命名空间
```markdown
    1.目的：让代码更好维护，让多种数据分类更加明确
    2.修改store.js
        const countAbout={
            namespace:true,
            state:{x:1},
            mutations:{...},
            actions:{...},
            getters:{
                bigSum(state){
                    return state.sum*10
                }
            }
        }

        const personAbout={
            namespace:true,
            state:{...},
            mutations:{...},
            actions:{...}
        }

        const store = new Vue.Store({
            modules:{
                countAbout,
                personAbout
            }
        })

## 路由

##### 1.理解：一个路由(route)就是一组映射关系，多个路由需要由路由器(router)进行管理
#### 2.前端路由器：key是路径，value是组件

### 1.基本使用
    1.安装vue-router，命令：npm i vue-router
    2.应用插件：Vue.use(VueRouter)
    3.编写router配置项
        //该文件专门用于创建整个应用的路由器
            import VueRouter  from "vue-router";

            //引入组件
            import About from '../components/About'
            import Home from '../components/Home'

            //创建并暴露一个路由器
            export default new VueRouter({
                routes:[
                    {
                        path:'/about',
                        component:About
                    },
                    {
                        path:'/home',
                        component:Home
                    }
                ]
            })

    4.实现切换(active-class可配置高亮样式)   
                     <router-link class="list-group-item "  active-class="active" to="/about">About</router-link>

    5.指定展示位置
        <router-view></router-view>

## 几个注意点
    1.路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
    2.通过切换，”隐藏“了的路由组件，默认是被销毁掉 的，需要的时候再去挂载
    3.每个组件都有自己的$route属性，里面存储着自己的路由信息
    4.整个应用只有一个router，可以通过组件的$router属性获取

        
## 多级路由(嵌套路由)
        //该文件专门用于创建整个应用的路由器
        import VueRouter  from "vue-router";

        //引入组件
        import About from '../pages/About'
        import Home from '../pages/Home'
        import Message from '../pages/Message'
        import News from '../pages/News'

        //创建并暴露一个路由器
        export default new VueRouter({
            routes:[
                {
                    path:'/about',
                    component:About
                },
                {
                    path:'/home',
                    component:Home,
                    children:[
                        {
                            path:'message',
                            component:Message
                        },
                        {
                            path:'news',
                            component:News
                        }
                    ]
                }
            ]
        })