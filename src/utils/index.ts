import { message } from 'antd';

export function searchRoute(path: string, routes: RouteNamespace.RouteRecord[], parentPath = ''): RouteNamespace.RouteRecord | undefined {
  // console.log(path, routes);
  for (const item of routes) {
    const pathRoutes = (item.path?.startsWith('/') || item.path === '*' || item.path === '/')
      ? item.path
      : `${parentPath === '/' ? parentPath + item.path : `${parentPath}/${item.path}`}`;

    if (pathRoutes === path) {
      return item;
    }
    if (item.children) {
      const res: RouteNamespace.RouteRecord | undefined = searchRoute(path, item.children, pathRoutes);
      if (res) {
        return res;
      }
    }
  }
}

/**
 * @param {string} path
 * @returns {boolean}
 */
export function isExternal(path: string) {
  return /^(?:https?:|mailto:|tel:)/.test(path);
}

/** 复制方法 */
export async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    message.success('复制成功');
  }
  catch (error) {
    console.error(error);
    message.error('复制失败');
  }
}
