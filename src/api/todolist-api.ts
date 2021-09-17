import axios from "axios";

type TodolistType= {
  id: string
  addedDate: string
  order: number
  title: string
}

type CreateTodolistResponseType = {
  resultCode: number
  messages: Array<string>
  data: {
    item: TodolistType
  }
}

type UpdateTodolistResponseType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

type DeleteTodolistResponseType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

type ResponseType<D> = {
  resultCode: number
  messages: Array<string>
  data: D
}

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '6a839c08-d4d3-4bf1-a317-273f31facc46'
  }
})

export const todolistAPI = {
  updateTodolist(todolistId:string,title:string){
    return instance.put<Array<UpdateTodolistResponseType>>(`todo-lists/${todolistId}`, {title})
  },
  deleteTodolist(todolistId:string){
    return instance.delete<Array<DeleteTodolistResponseType>>(`todo-lists/${todolistId}`)
  },
  getTodolist(todolistId:string){
    return instance.get<Array<TodolistType>>(`/todo-lists`)
  },
  createTodolist(title:string){
    return instance.post<ResponseType<{item:TodolistType}>>(`/todo-lists`,{title})
  }

}