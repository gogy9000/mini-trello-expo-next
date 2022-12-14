export type Data<T = any> = {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}
export type Item<D = any> = {
  item: D
}

export type TodoListItem = {
  '_id': string,
  'title': string
  'addedDate': string
  'order': number
  isASynchronizedTodo?: boolean
}

export type GetTaskType = {
  error: string | null
  items: TaskItem[]
  totalCount: number
}

export type TaskItem = {
  description: string | null
  title: string
  status: number
  priority: number
  startDate: Date | null
  deadline: Date | null
  _id: string
  todoListId: string
  order: number
  addedDate: Date
}
export type LoginPayloadType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: boolean
}
export type AuthDataType = {
  email: string
  id: string
  login: string
}

export type FeedbackMutationType = {
  'isError': boolean,
  'isLoading': boolean,
  'isSuccess': boolean,
  'isUninitialized': boolean,
  'originalArgs': undefined,
  'reset': (args: any[]) => any,
  'status': string,
}
export type ErrorType = {
  'data': unknown,
  'status': number,
  'message': string,
}