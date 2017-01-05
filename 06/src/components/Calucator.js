import React, { Component  } from 'react'
import {ADD,MINUS,MULTIPLY,DIVIDE} from '../action'
export default  class Calculator extends Component {
constructor(props){
		super(props)
		this.state={
			num1:0,
			caltyp:'add',
			num2:0,
			goal:0
		}

	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.props.value) {
      console.log(this.state.goal)
    this.setState({goal:nextProps.value})
    }
	}
	changeNum1(event){
	this.setState({num1:event.target.value});
this.props.onChangeCallback(event.target.value,this.state.caltype,this.state.num2)
	}
	changeNum2(event){
		this.setState({num2:event.target.value});
this.props.onChangeCallback(this.state.num1,event.target.value,event.target.value)
	}
	changeCaltype(event){
	this.setState({caltype:event.target.value});
this.props.onChangeCallback(this.state.num1,event.target.value,this.state.num2)
	}
	
	render(){
		return <div>
<h1>redux加减乘除计算例子</h1>
<input type="text" id="num1" value={this.state.num1} onChange={this.changeNum1.bind(this)} />
<select id="selection"defaultValue={ADD} onChange={this.changeCaltype.bind(this)}>
<option value={ADD} >加</option>
<option value={MINUS}>减</option>
<option value={MULTIPLY}>乘</option>
<option value={DIVIDE}>除</option>
</select>
<input type="text" id="num2"  onChange={this.changeNum2.bind(this)} />
<label>=</label>
<label type="text" name="goal" id="value" readOnly="readOnly">{this.state.goal}</label>
</div>
	}
}
