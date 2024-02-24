
import { useState } from 'react'
import './App.css'

function App() {

  // having states  this is for taking dtaa from input 
  const [newItem,setNewItem]=useState("")

  const [todos , setTodos]=useState([])

  function handleSubmit(e){
    e.preventDefault();
    setTodos((currentTodos)=>{
      return [
        ...currentTodos,{id:crypto.randomUUID(),title:newItem,completed:false},
      ]
    })
  }
  // this is for checked and unckeched
  function toggle(id,completed){
    setTodos(currentTodos=>
      {
        return currentTodos.map(todo=>
          {
            if(todo.id==id){
              return {...todo,completed}
            }
            return todo;
          })
      })
  }


  //to delete todos

  function deleteitem(id){
    setTodos(currentTodos=>
      {
        return currentTodos.filter(todo=>todo.id!=id);
      })
  }
  return (
  <>
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor="item"> Add new Item</label>
        <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item"/>
      </div>
      <button className='btn' > ADD</button>

    </form>

    <h1 className='header'>ToDo List</h1>
    <ul className='list'>
      {todos.length===0&&"No Todos"}

      {todos.map(todo=>{
        return (
          <li key={todo.id}>
        <label>
          <input type='checkbox' checked={todo.completed} onChange={e=>toggle(todo.id,e.target.checked)}/>
          {todo.title}
        </label>
        <button className="btn btn-danger" onClick={()=>deleteitem(todo.id)}>Delete</button>

      </li>
        )
      })}
      
    </ul>


      </>
  )
}

export default App
