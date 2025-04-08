import { rootRouter } from '@/routers';
import { fetchUserSatateToken } from '@/store/modules/user';
import { searchRoute } from '@/utils';
import { getToken } from '@/utils/token';
import { useDispatch, useStore } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function AuthRouter(props: { children: JSX.Element }) {
  const { pathname } = useLocation();
  const nowRoute = searchRoute(pathname, rootRouter);
  const needLogin = nowRoute?.meta?.needLogin;
  const token = getToken();
  const dispatch = useDispatch();
  const { user: { id } }: { user: UsersNamespace.UserReq } = useStore().getState() as unknown as { user: UsersNamespace.UserReq };

  /** 已登录 但是没有用户信息 */
  if (token && !id) {
    dispatch(fetchUserSatateToken() as unknown as any);
  }
  /** 判断是否有Token 有token且目标登录页 重定向到主页 */
  if (token && pathname === '/login')
    return <Navigate to="/" replace />;

  /** 判断是否有token 无token 重定向到登录页 */
  if (!token && needLogin)
    return <Navigate to="/login" replace />;

  /**  判断当前路由是否需要访问权限(不需要权限直接放行) */
  if (!nowRoute?.meta?.needLogin)
    return props.children;

  return props.children;
}

export default AuthRouter;
