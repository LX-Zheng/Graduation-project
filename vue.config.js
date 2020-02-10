module.exports = {
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8080',
        https: false,   //是否使用https协议
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        hotOnly: false, //是否开启热更新
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000', //API服务器的地址
                // changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                }
            }
        },
    }
}