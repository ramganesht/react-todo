import React from 'react';

const Todos = ({todos, deleteTodo}) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<a key={todo.id} onClick={()=>{deleteTodo(todo.id)}} className="list-group-item list-group-item-action">
				    <div className="d-flex w-100 justify-content-between">
				      <h5 className="mb-1">{todo.title}</h5>
				      <small>{todo.id}</small>
				    </div>
				    <p className="mb-1">{todo.content}</p>
			  	</a>
			)
		})
		) : (<p>Nothing todo, Yay!</p>)

	return (
  		<div className="list-group">
			{todoList}
		</div>
	)
}

export default Todos;