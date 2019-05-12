import axios from 'axios';

const mockAPIurl = 'http://5c0d8f847bf09800137852c6.mockapi.io/todos';

export const addTodo = (title, content) => {
	return dispach => {
		axios.post(mockAPIurl, {title:title, content:content})
		.then(
			res => {
				axios.get(mockAPIurl)
				.then(
					res => {
						dispach(addTodoSuccess(res.data));
					}
				);
			}
		);
	}
}

const addTodoSuccess = todo => ({
  type: 'ADD',
  payload: [
    ...todo
  ]
});

export const getTodo = () => {
	return dispach => {
		axios.get(mockAPIurl)
		.then(
			res => {
				dispach(getTodoSuccess(res.data));
			}
		);
	}
}

const getTodoSuccess = todo => ({
  type: 'GET',
  payload: [
    ...todo
  ]
});