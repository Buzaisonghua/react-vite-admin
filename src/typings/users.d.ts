declare namespace UsersNamespace {
  interface LoginReq {
    username: string
    password: string
  }

  interface UserReq {
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
}
