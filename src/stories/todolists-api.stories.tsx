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
    const todolistId=''
    todolistAPI.getTodolist(todolistId)
      .then((res) => {
        setState(res.data[0].title);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title='NEW TODOLIST'
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
    const todolistId=''
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
    todolistAPI.updateTodolist(todolistId,'SOME NEW TITLE')
      .then((res) => {
        setState(res.data)
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
