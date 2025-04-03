declare namespace StoreNamespace {
  interface ActionMode {
    // 类型
    type?: string
  }

  interface UserStateMode extends UsersNamespace.UserReq { }

  interface UserState {
    name: string
    age: number
  }
}
