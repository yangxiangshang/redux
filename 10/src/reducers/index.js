import {ADD,MINUS,MULTIPLY,DIVIDE,SETVALUES} from '../action'
/*
注意事项
1、reducer是一个纯函数
2、不能执行有副作用的请求，如api调用和路由跳转
3、不能调用非纯函数，如date.now()
*/
const reducer = (state=0,action)=>{
    			switch(action.type){
    			/*action javascrtipt对象，redux规定它必须含有一个字符串值type属性*/
    			case ADD:
    			return {num1:action.num1,num2:action.num2,total:Number(action.num1)+Number(action.num2)}//为什么要用number,因为所有html文本都是字符类型，必须转化为数字
    			case MINUS:
    			return {num1:action.num1,num2:action.num2,total:action.num1-action.num2}
    			case MULTIPLY:
    			return {num1:action.num1,num2:action.num2,total:action.num1*action.num2}
    			case DIVIDE:
    			return {num1:action.num1,num2:action.num2,total:action.num1/action.num2}
                case SETVALUES:
                    let n=0;
                    switch(action.computeType){
                    case "ADD":
                    n=Number(action.num1) + Number(action.num2)
                    break
                    case "MINUS":
                    n=action.num1 - action.num2
                    break
                    case "MULTIPLY":
                    n=action.num1 * action.num2
                    break
                    case "DIVIDE":
                    n=action.num1 / action.num2
                    break
                    default:
                    n=0
                    }
                    return {num1:action.num1,num2:action.num2,total:n};
    			default:
    			return state
    		}

    	}
export default reducer