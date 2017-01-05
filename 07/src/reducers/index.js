import {ADD,MINUS,MULTIPLY,DIVIDE} from '../action'
/*
注意事项
1、reducer是一个纯函数
2、不能执行有副作用的请求，如api调用和路由跳转
3、不能调用非纯函数，如date.now()
*/
const reducer = (state,action)=>{
    		if (state==='undefined') {
    			return 0;
    		}
    		switch(action.type){
    			/*action javascrtipt对象，redux规定它必须含有一个字符串值type属性*/
    			case ADD:
    			return Number(action.num1)+Number(action.num2)//为什么要用number,因为所有html文本都是字符类型，必须转化为数字
    			case MINUS:
    			return action.num1-action.num2
    			case MULTIPLY:
    			return action.num1*action.num2
    			case DIVIDE:
    			return action.num1/action.num2
    			default:
    			return state
    		}

    	}
export default reducer