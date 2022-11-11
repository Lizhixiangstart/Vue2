const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false,
  //开启代理服务器(方式一)
 /*  devServer:{
    proxy:'http://localhost:5000'
  }, */
  //开启代理服务器(方式二)
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
  */
}






