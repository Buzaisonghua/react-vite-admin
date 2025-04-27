import defaultSettings from '@/settings';
import { debounce } from 'lodash-es';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const { sidebarMoblieWidth, sidebarCollapsedWidth } = defaultSettings;

export function useLayoutResize() {
  const { body } = document;
  const dispatch = useDispatch();

  const $_getWidth = () => {
    const rect = body.getBoundingClientRect();
    return rect.width;
  };

  const $_resizeHandler = debounce(() => {
    if (!document.hidden) {
      const width = $_getWidth();
      if (width > sidebarCollapsedWidth) {
        // desktop
        dispatch({ type: 'app/changeCollapsed', payload: { type: false } });
        setTimeout(() => {
          dispatch({ type: 'app/changeMobile', payload: { type: false } });
        });
      }
      else if (width > sidebarMoblieWidth && width < sidebarCollapsedWidth) {
        // ipad
        dispatch({ type: 'app/changeCollapsed', payload: { type: true } });
        setTimeout(() => {
          dispatch({ type: 'app/changeMobile', payload: { type: false } });
        });
      }
      else {
        // mobile
        dispatch({ type: 'app/changeCollapsed', payload: { type: false } });
        setTimeout(() => {
          dispatch({ type: 'app/changeMobile', payload: { type: true } });
        });
      }
      // dispatch({ type: 'app/changeMobileState', payload: { width } });
    }
  }, 100);

  // 监听reisze事件
  function resizeListener() {
    window.addEventListener('resize', $_resizeHandler);
  }
  // 取消监听resize事件
  function removeResizeListener() {
    window.removeEventListener('resize', $_resizeHandler);
  }

  useEffect(() => {
    $_resizeHandler();
    resizeListener();
    return () => {
      removeResizeListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
