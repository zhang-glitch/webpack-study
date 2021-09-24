

import a from './a'
import data from './demo.json';
// 引入非js,json资源，进行打包会报错，所以需要通过loader来使webpack可以打包非js，json的资源。
import "../static/css/index.css";
import '../static/font/iconfont.css';
// import './index.sass';
// console.log("=========", "我是index.js文件");
console.log(data)
console.log("===========")

a()