import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {getTodo} from './../actions';

import Todos from './Todos';
import AddForm from './AddForm';
import Header from './Header';


class AppHome extends PureComponent {
  
  deleteTodo = (id) => {
    console.log(id);
    // const newTodos = this.props.todos.filter((todo)=>{return todo.id !== id} );
  }

  componentWillMount(){
    this.props.initData();
  }

  render(){
  	console.log(this.props.todos);
    return (
      <div className="container">
        <Header/>
        <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
        <AddForm/>
      </div>
    );  
  }
}
const mapStateToProps = (state) => {
	return {todos:state.todos};
}
const mapDispatchToProps = (dispatch) => {
  return {
    initData: () => dispatch(getTodo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHome)