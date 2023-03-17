export const AddTodoAction = (todo) => (dispatch, getState) =>{
    const {
        Todo: { todos },   //whatever input we give it is stored in todo variable
    } = getState();
    const hasTodo = todos.find((i) => i.todo === todo);     //if todo input is already present by checking with find(i) then leave input asitis. 

    if (!hasTodo && todo !== "") {                         //If not present it is going to add newtodo
        dispatch({                           
            type: "ADD_Todo",
            payload: [{ id: todo, todo }, ...todos],
        });
    }
}

export const RemoveTodoAction = (todo) => (dispatch, getState) =>{
    const {
        Todo: { todos },
    } = getState();
    dispatch({
        type: "Remove_Todo",
        payload: todos.filter((t) => t.id !== todo.id),
    });
}
