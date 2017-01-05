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
 //ACTION 类型
 //action 创建函数
 export add= (n1,n2)=>{
 	return {type:ADD,
 		num1:n1,num2:n2
 	}
 }
 export minus= (n1,n2)=>{
 	return {type:MINUS,
 		num1:n1,num2:n2
 	}
 }
 export multiply= (n1,n2)=>{
 	return {type:MULTIPLY,
 		num1:n1,num2:n2
 	}
 }
 export divide= (n1,n2)=>{
 	return {type:DIVIDE,
 		num1:n1,num2:n2
 	}
 }

