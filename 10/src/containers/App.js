import React, { Component  } from 'react'
import Calculator from '../components/Calucator'
import HelloA from '../components/HelloA'
import HelloB from '../components/HelloB'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { add,minus,multiply,divide,fetchData } from '../action'
class App extends Component{
     constructor(props) {
    super(props);
    this.state = {
        num1:0,
        num2:0,        
        goal:0
    };
}
	/*calucate(num1,caltype,num2){
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
	}*/
     componentWillReceiveProps(nextProps) {
        if (nextProps.goal.total !== this.props.goal.total) {
       this.setState({goal:nextProps.goal.total})
    }
    if (nextProps.goal.num1 !== this.props.goal.num1) {
       this.setState({num1:nextProps.goal.num1})
    }
    if (nextProps.goal.num2 !== this.props.goal.num2) {
       this.setState({num2:nextProps.goal.num2})
    }
    if (nextProps.goal.total !== this.props.goal.total) {
        console.log('goal':nextProps.goal.total)
       this.setState({goal:nextProps.goal.total})
    }
     }
	render(){
		return (
            <div>
<Calculator  num1={this.state.num1} num2={this.state.num2} value={this.state.goal} onChangeCallback={this.props.calucate}></Calculator>
<button onClick={this.props.handleClick}>异步获取数据</button>
<Link>filter:{this.props.params.filter}</Link>
{this.props.params.filter=='HelloA'?<HelloA/>:<HelloB/>}
</div>
)
	}
}
//mapStateToProps和componentWillReceiveProps
const mapStateToProps= state=>{
 return {
    goal:state
 }
}
//mapDipatchToProps
const mapDipatchToProps = (dispatch) =>{
    return {
            calucate:(num1,caltype,num2)=>{
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
        },
    handleClick:()=>{
        dispatch(fetchData())
    }
    }
}
export default connect(mapStateToProps,mapDipatchToProps)(App)