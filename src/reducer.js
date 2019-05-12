let initState = {
    todos: []
  };

const todos = (state = initState, action) => {
	console.log(action);
	switch (action.type){
		case "ADD":
			return {todos:action.payload}
		case "GET":
			return {todos:action.payload}
		default:
			return state
	}
}

export default todos;