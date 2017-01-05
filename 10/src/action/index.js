/**
 * 
 * @authors  yangxiangshang
 * @date    2016-12-27 17:05:17
 * @version $Id$
 */
 export const ADD='ADD'
 export const MINUS='MINUS'
 export const MULTIPLY='MULTIPLY'
 export const DIVIDE='DIVIDE'
 export const SETVALUES='SETVALUES'
 //ACTION 类型
 //action 创建函数
 export const add= (n1,n2)=>{
 	return {type:ADD,
 		num1:n1,num2:n2
 	}
 }
 export const minus= (n1,n2)=>{
 	return {type:MINUS,
 		num1:n1,num2:n2
 	}
 }
 export const multiply= (n1,n2)=>{
 	return {type:MULTIPLY,
 		num1:n1,num2:n2
 	}
 }
 export const divide= (n1,n2)=>{
 	return {type:DIVIDE,
 		num1:n1,num2:n2
 	}
 }
 export const setvalues  = (n1,type,n2) => {
  return {type: SETVALUES,
   num1:n1,computeType:type,num2:n2}  
}
 export const fetchData = ()=>(dispatch, getState)=>{
 	setTimeout(function () {
  		console.log('aaaa')
            dispatch(setvalues(1,ADD,2))
          }, 1000)
 }

