/**
 * middleware它的签名{getState,dispatch} => next=>action
 * @authors  yangxiangshang
 * @date    2016-12-30 13:01:42
 * @version $Id$
 * @desc 记录所有被发起的 action 以及产生的新的 state。
 */
 const mylogger = store => next => action=>{
 	console.info('dispatching', action)
   let result = next(action)
   console.log('next state', store.getState())
  return result
 }
 export default mylogger

