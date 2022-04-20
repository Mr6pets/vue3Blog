# vue3Blog
这是一个vite搭建Vue3的博客

> 这里的用了vite构建，做了部分记录，尽量详细记录

##### 构建
~~~js
//快速构建
npm init vite@latest 项目名字 -- --template vue


// 后台模拟数据采用json-server

// 全局安装安装
npm install -g json-server
//或者本项目安装
npm i json-server

// 在根目录下
// 建立db.json 的文件书写你的JSON文件

// 启动监听：json-server --watch data/db.json（文件地址）
// 如果端口号被占用 采用指定端口号的方法启动监听 json-server --watch data/db.json --port=3003


// 使用vue-router 
npm install vue-router

~~~