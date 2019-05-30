
//1.整个应用的入口
//2.webpack-config.js中的入口指定该文件

import React from 'react'
import ReactDOM from 'react-dom'
//Provider的作用是将整个应用的唯一store传递到所有的子组件
import { Provider } from 'react-redux'
//整个应用的唯一stor
import store from './store'

import App from './App.js'
//注意:Provider组件的store属性用来指定整个应用的唯一store
//--> App组件
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))