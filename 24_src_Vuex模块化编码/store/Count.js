//求和功能相关的配置
export default{
    namespaced:true,
    actions:{
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
         },
         
    },
    mutations:{
        JIA(state,value){
            // console.log('mutations中jia被调用了',state,value);
            state.sum+=value;
        },
        JIAN(state,value){
            state.sum-=value;
        },
    },
    state:{
        sum:0,//当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10  
        }
    },
}