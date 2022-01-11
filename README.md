# i-stuty-react

## simple-react

> 是使用 creat-react-app 创建的项目
> 是去第一次创建关于 react 的项目，是一个没有任何改动的简单的项目
> 推荐 npx creat-react-app 项目名

## webpack-react

> webpack-react 是我使用 webpack 创建 react 的一个 demo，下面是创建的步骤】

- 1、创建一个文件夹 webpack-react
- 2、进入 webpack-react 文件夹内，使用 npm init -y 生成 package.json
- 3、安装 webpack，npm install webpack webpack-cli --save-dev
- 4、安装必要的 bebal，npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
  (1) **知道:**

  > @babel/core 是 bebal 的核心模块
  > @babel/preset-env 是 bebal 把 ES6+的语法转换成 ES5
  > @babel/preset-react 则是帮我们识别 JSX 语法
  > babel-loader :则是帮我们把不同的文件转化成我们想要的格式输出，或者说就是将我们的经过 babel 处理后的代码进行输出成浏览器可以识别的文件。

  (2) **配置.babelrc**

  ```javascript
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```

  (2) **配置 webpack.config.js**

  ```javascript
  const path = require('path')
  module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  }
  ```

- 5、在./src 目录下新建三个文件 index.html、main.js、App.js
- 6、处理 html，安装 html-webpack-plugin 和 html-loader npm install html-webpack-plugin html-loader --save-dev
  (1) **配置 webpack.config.js**

  ```javascript
  const path = require('path')
  const HtmlWebPackPlugin = require('html-webpack-plugin')
  module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        titel: 'react app',
        filename: 'index.html',
        template: './src/index.html',
      }),
    ],
  }
  ```

- 7、在 index.html 创建以下的代码

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
  </html>
  ```

- 8、在写 react 代码前需要安装 react 和 react-dom npm：install react react-dom --save
- 9、App.js 文件中创建一个组件并导出

  ```javascript
  import React from 'react'
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      )
    }
  }
  export default App
  ```

- 10、main.js 中将组件导入并渲染

  ```javascript
  import React from 'react'
  import ReactDOM from 'react-dom'
  import App from './App.js'

  ReactDOM.render(<App />, document.getElementById('app'))
  ```

- 11、运行项目，安装 webpack-dev-server npm install webpack-dev-server --save-dev。并在 package.json 的 scripts 配置下面的代码

  ```javascript
  "start": "webpack-dev-server --open --mode development"
  ```

- 12、npm run start 运行项目
