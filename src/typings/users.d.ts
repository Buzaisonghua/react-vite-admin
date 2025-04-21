declare namespace UsersNamespace {
  interface LoginReq {
    userName: string
    password: string
  }

  interface UserReq {
    // 用户名
    userName: string
    // token
    token: string
    // 用户id
    id: Id
    // 用户角色
    role: number
    // 用户头像
    avatar: string
  }
}
