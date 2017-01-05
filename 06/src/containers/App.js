import React, { Component  } from 'react'
import Calculator from '../components/Calucator'
import { connect } from 'react-redux'
import { add,minus,multiply,divide } from '../action'
class App extends Component{
     constructor(props) {
    super(props);
    this.state = {        
        goal:0
    };
}
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
     componentWillReceiveProps(nextProps) {
        if (nextProps.goal !== this.props.goal) {
       this.setState({goal:nextProps.goal})
        }
     }
	render(){
		return (
<Calculator value={this.state.goal} onChangeCallback={this.calucate.bind(this)}></Calculator>
)
	}
}
//mapStateToProps和componentWillReceiveProps
const mapStateToProps= state=>{
 return {
    goal:state
 }
}
export default connect(mapStateToProps)(App)