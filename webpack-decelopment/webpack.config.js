const { resolve } = require("path")
// 引入html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 处理css文件
      {
        // 这里表示匹配的文件，都需要通过该loader转化。
        test: /\.css$/,
        // 需要使用到的loader,从后往前执行
        use: [
          // 创建 style 标签，将 js 中的样式资源插入进行，添加到 head 中生效 。
          'style-loader',
          // 将 css 文件变成 commonjs 模块加载 js 中，里面内容是样式字符串 。
          'css-loader'
        ]
      },
      // 处理sass文件
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // 处理图片
      // {
      //   test: /\.(jpe?g|png|svg|gif)/i,
      //   type: 'asset/resource',
      // },
      // 这个是处理样式中引入的图片资源
      {
        test: /\.(png|gif|jpg|jpeg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: '[name].[hash:10].[ext]',
              outputPath: 'static/imgs',
              esModule: false,
            }
          }
        ],
        type: 'javascript/auto'
      },
      // 这个是处理html中引入的图片资源
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // 打包其他资源(除了 html/js/css 资源以外的资源) 
      { // 排除 css/js/html 资源 
        exclude: /\.(css|js|html|sass|json|png|gif|jpg|jpeg)$/,
        loader: 'file-loader',
        options: { name: '[hash:10].[ext]', outputPath: "static/others" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 使用的模式
  mode: 'development',
  devServer: {
    // // 项目构建后路径 
    static: resolve(__dirname, 'build'),
    // 启动 gzip 压缩 
    compress: true,
    // 端口号 
    port: 3000,
    // 自动打开浏览器 
    open: true,
    hot: true
  },
  // target: 'web'
}