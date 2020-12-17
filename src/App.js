import React, {useState, useEffect} from 'react'
import './App.css'
import {Button} from '@material-ui/core'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
function App() {

  const [Todos , setTodos] = useState([]); 
  const [Inputs, setInput] = useState([]);
   
  useEffect(() => {
    db.collection('people').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id:doc.id, todo: doc.data().todo})))
    })
    
  }, [])
console.log(Todos)
console.log(Inputs)
  const addTodo = (Event) => {
    db.collection('people').add({
      todo: Inputs,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    Event.preventDefault()
    // setTodos([...Todos, Inputs])
    setInput([' '])
  }
  return (

    <div className='App'>
      <h1>Welcome in Todo-App</h1>
      <p>Created by Tanmay</p>
      <br />
      <br />
      <br />
      <FormControl>
      <InputLabel htmlFor="my-input">Enter Into Todo</InputLabel>
  <Input value={Inputs} onChange={Event => setInput(Event.target.value)} />
 
</FormControl>
      
      <Button disabled={!Inputs} onClick={addTodo} 
      type ='sumit'
      variant="contained" color="primary">
      Add Todo
</Button>
      <form>
      <ul>
       {Todos.map(todos => (
         <Todo todo={todos.todo} id={todos.id}/>
       ))}
      </ul>
</form>
    </div>
  )
}

export default App

