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
