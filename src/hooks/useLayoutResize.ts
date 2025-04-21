import defaultSettings from '@/settings';
import { debounce } from 'lodash-es';
import { useEffect } from 'react';

export function useLayoutResize() {
  const { body } = document;
  const WIDTH = defaultSettings.sidebarMoblieWidth;

  const $_isMobile = () => {
    const rect = body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  };

  const $_resizeHandler = debounce(() => {
    if (!document.hidden) {
      const isMobile = $_isMobile();
      console.error('isMobile', isMobile);
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
    resizeListener();
    return () => {
      removeResizeListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
