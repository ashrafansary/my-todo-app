import './App.css';
import React, {useState, useEffect} from 'react'
import Todos from './Todos'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from '../firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([  ])
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todos: doc.data().todo})))
    })
  }, [])

  const  changeHandler =(event) => {
    setInput(event.target.value)
  }

  const  addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input type="text" value={input} onChange={changeHandler} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
        <Todos todos={todos} />
      </form>
    </div>
  );
}

export default App;
