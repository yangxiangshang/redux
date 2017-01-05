import React, { Component  } from 'react'
import Calculator from '../components/Calucator'
import { connect } from 'react-redux'
import { add,minus,multiply,divide } from '../action'
class App extends Component{
	calucate(num1,caltype,num2){
		const { dispatch } = this.props
		console.log(caltype)
   switch(caltype){
        	case "ADD":
        	dispatch(add(num1,num2))
        	break
        	case "MINUS":
        	dispatch(minus(num1,num2))
        	break
        	case "MULTIPLY":
        	dispatch(multiply(num1,num2))
        	break
        	case "DIVIDE":
        	dispatch(divide(num1,num2))
        	break
        	default:
        	dispatch(add(num1,num2))
        	break
        }
	}
	render(){
		return (
<Calculator value={this.props.value} onChangeCallback={this.calucate.bind(this)}></Calculator>
)
	}
}
export default connect()(App)