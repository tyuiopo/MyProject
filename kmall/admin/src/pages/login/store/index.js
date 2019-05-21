
//1.这个reducer就是login组件自己的reducer

import reducer from './reducer.js'
import * as actionCreator from './actionCreator.js'

//2.把login组件自己的reducer导出
export { reducer,actionCreator }