import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistAPI} from "../api/todolist-api";

export default {
  title: 'API'
}

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': '6a839c08-d4d3-4bf1-a317-273f31facc46'
  }
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = ''
    todolistAPI.getTodolist(todolistId)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title = 'NEW TODOLIST'
    todolistAPI.createTodolist(title)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '975847c4-0190-4593-8046-6d22923d6b68'
    todolistAPI.deleteTodolist(todolistId)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = ''
    todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
      .then((res) => {
        setState(res.data)
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const GetTasks = () => {
  const [state, setState] = useState<any>(null)
  const [todolistId, setTodolistId] = useState<string>('')
  const getTasks = () => {
    todolistAPI.getTasks(todolistId)
      .then((res) => {
        setState(res.data)
      })
  }

  return <div> {JSON.stringify(state)}
    <div>
      <input placeholder={'todolistId'} value={todolistId}
             onClick={(e) => {
               setTodolistId(e.currentTarget.value)
             }}/>
      <input placeholder={'Task Title'} value={todolistId}
      onClick={(e)=>{setTodolistId(e.currentTarget.value)}}/>
      <button onClick={UpdateTask}> update task</button>
  </div>
</div>
}
export const UpdateTask = () => {
  const [state, setState] = useState<any>(null)
  const [taskTitle, setTitle] = useState<string>('title 1')
  const [description, setDescription] = useState<string>('description 1')
  const [status, setStatus] = useState<number>(0)
  const [priority, setPriority] = useState<number>(0)
  const [stateData, setStateData] = useState<string>('')
  const [deadline, setDeadline] = useState<string>('')

  const [todolistId, setTodolistId] = useState<string>('')
  const [taskId, setTaskId] = useState<string>('')

 const createTask = () => {
  const [state, setState] = useState<any>(null)
  const [taskTitle, setTaskTitle] = useState<string>('')
  const [todolistId, setTodolistId] = useState<string>('')

  const createTask = () => {
    todolistAPI.createTask(todolistId, taskTitle)
      .then((res) => {
        setState(res.data);
      })
  }
  return <div> {JSON.stringify(state)}
    <div>
      <input placeholder={'taskId'} value={taskId} onClick={(e) => {setTaskId(e.currentTarget.value)}}/>
      <input placeholder={'todolistId'} value={todolistId} onClick={(e) => {setTodolistId(e.currentTarget.value)}}/>
      <input placeholder={'Task Title'} value={todolistId} onClick={(e)=>{setTodolistId(e.currentTarget.value)}}/>
      <input placeholder={'Description'} value={description} onClick={(e)=>{setDescription(e.currentTarget.value)}}/>
      <input placeholder={'status'} value={status} onClick={(e)=>{setDescription(e.currentTarget.value)}}/>
      <button onClick={createTask}> create task</button>
    </div>
  </div>
}}
// export const DeleteTask = () => {
//   // const [state, setState] = useState<any>(null)
//   // useEffect(() => {
//   //   const todolistId='975847c4-0190-4593-8046-6d22923d6b68'
//   todolistAPI.deleteTask(todolistId, taskId)
//     .then((res) => {
//       setState(res.data);
//     })
// }
// return <div> {JSON.stringify(state)}
//   <div>
//     <input placeholder={'todolistId'} value={todolistId}
//            onClick={(e) => {
//              setTodolistId(e.currentTarget.value)
//            }}/>
//     <input placeholder={'Task Title'} value={TaskTitle}
//            onClick={(e) => {
//              setTaskId(e.currentTarget.value)
//            }}/>
//     <button onClick={deleteTask}>delete task</button>
//   </div>
// </div>

