## 关于不同版本的Vue ##

### 1.Vue.js与vue.runtime.xxx.js的区别 
    (1)vue.js是完整版的vue，包含：核心功能+模板解析器
    (2)Vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
###

## ref属性

### 1.被用来给元素或子组件引用信息(id的替代者)

### 2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象(vc)

### 3.使用方式：
    打标识：<h1 ref="xxx">...</h1>或<school ref="xxx"></school>
    获取:this.xxx

## 配置项props
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
             


## mixin(混入)
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

## 插件
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

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## TodoList案例
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

## 组件自定义事件
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



