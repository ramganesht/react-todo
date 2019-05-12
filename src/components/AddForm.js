import  React, {Component} from 'react';
import { connect } from 'react-redux';
import {addTodo} from './../actions';

class AddForm extends Component{
	
	render(){
		return(
			<div>
				<form onSubmit={(e)=>{e.preventDefault();this.props.handleSubmit(e)}}>
					<label>Add Todo:</label>
					<br/>
					<input type="text" value={this.props.title}/>
					<br/>
					<textarea rows="3" value={this.props.content}></textarea>
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {todos:state.todos};
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e) => dispatch(addTodo(e.target.querySelector('input').value, e.target.querySelector('textarea').value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
