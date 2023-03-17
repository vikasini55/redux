import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './action/TodoAction'
import './App.css';

function App() {
   //local state of the component
   const [todo, setTodo] = useState();
   // to action to store/to call your action 
   const dispatch = useDispatch();
   // to access our state we useSelector
   const Todo = useSelector((state) => state.Todo);
   //
   const { todos } = Todo;
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    console.log(t)
    dispatch(RemoveTodoAction(t));
  }
 return (
  <div className="App">
    <header className="App-header">
      <h2>Todo List APP</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter a Todo" style={{
          width: 400,
          padding: 10,
          borderRadius: 20,
          border: "none",
          fontSize: 20,
        }}
        //changing the input box
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit' style={{
          padding: 12,
          borderRadius: 25,
          color: "Red",
          fontSize: 15,
          marginLeft: 20,
        }}>Add</button>
      </form>
      <ol className='allTodos'>
        {
          todos && todos.map((y) => (
            <li key={y.id} className='singleTodo'>
              <span className='todoTextr'>{y.todo}</span>
              <button style={{
                padding: 12,
                borderRadius: 25,
                fontSize: 15,
                marginLeft: 20,
              }}
                onClick={() => removeHandler(y)}
              >Delete</button>
            </li>
          ))}
      </ol>
    </header>
  </div>
)
            }

export default App;
