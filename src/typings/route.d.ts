/** 路由相关数据格式 */
declare namespace RouteNamespace {
  interface RouteRecord {
    /** 地址 */
    path?: string
    /** 组件 */
    element?: React.ReactNode
    /** 路由描述 */
    meta?: MateRoute
    /** 子路由 */
    children?: RouteRecord[]
  }
  interface MateRoute {
    /** 浏览器标题 */
    title: string
    /** menu路由图标 */
    icon?: string
    /** 是否需要登录 */
    needLogin?: boolean
  }
}
