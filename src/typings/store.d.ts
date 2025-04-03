declare namespace StoreNamespace {
  interface ActionMode {
    // 类型
    type?: string
  }

  interface UserStateMode {
    // 用户名
    username: string
    // token
    token: string
    // 用户id
    id: Id
    // 用户角色
    role: number
    // 用户头像
    avatar: string
  }

  interface UserState {
    name: string
    age: number
  }
}
