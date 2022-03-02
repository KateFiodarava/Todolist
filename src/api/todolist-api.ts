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
  fieldsErrors:Array<string>
  data: {}
}
type ResponseType<D> = {
  resultCode: number
  messages: Array<string>
  data: D
}
type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline:string
  id: string
  todoListId: string
  order:number
  addedDate: string
}
type UpdateTaskModeType ={
  title: string
  description: string
  completed: boolean
  status: string
  priority: string
  startDate: string
  deadline: string
}
type GetTasksResponse ={
  error:string
  totalCount:number
  items: TaskType[]
}
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '6a839c08-d4d3-4bf1-a317-273f31facc46'
  }
})

export const todolistAPI = {
  updateTodolist(todolistId: string, title: string) {
    return instance.put<Array<UpdateTodolistResponseType>>(`todo-lists/${todolistId}`, {title})
  },
  deleteTodolist(todolistId: string) {
    return instance.delete<Array<DeleteTodolistResponseType>>(`todo-lists/${todolistId}`)
  },
  getTodolist(todolistId: string) {
    return instance.get<Array<TodolistType[]>>(`todo-lists`)
  },
  createTodolist(title: string) {
    return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
  },
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`todo-lists${todolistId}/tasks`)
  },
  createTask(todolistId: string, taskTitle: string) {
    return instance.post<ResponseType<TaskType>>(`todo-lists${todolistId}/tasks`, {title: taskTitle})
  },
//   updateTask(todolistId:string,taskId:string,model:UpdateTaskModeType){
//     return instance.put<Array<UpdateTodolistTaskResponseType>>(`todo-lists/${todolistId}`, {title:taskId})
//   },
//   deleteTask(todolistId:string,taskId:string){
//     return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
//   }
//
//
}