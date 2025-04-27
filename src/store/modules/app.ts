import defaultSettings from '@/settings';
import { createSlice } from '@reduxjs/toolkit';

const { sidebarMoblieWidth, sidebarCollapsedWidth } = defaultSettings;

// This slice manages the collapsed state of the sidebar
export const app = createSlice({
  name: 'app',
  initialState: {
    // Sidebar collapsed state
    collapsed: false,
    // 是否是移动端 通过宽度判断
    mobile: false,
    // 移动端时 导航栏的状态
    mobileCollapsed: false,
  },
  reducers: {
    changeCollapsed: (state, action) => {
      const { type } = action.payload;
      state.collapsed = type;
    },
    changeMobile: (state, action) => {
      const { type } = action.payload;
      state.mobile = type;
    },
    changeMobileState: (state, action) => {
      const { width } = action.payload;
      state.mobileCollapsed = false;
      if (width > sidebarCollapsedWidth) {
        state.collapsed = false;
        state.mobile = false;
      }
      else if (width > sidebarMoblieWidth && width < sidebarCollapsedWidth) {
        state.collapsed = true;
        state.mobile = false;
      }
      else {
        state.collapsed = false;
        state.mobile = true;
      }
    },
    changeMobileCollapsed: (state, action) => {
      const { collapsed } = action.payload;
      state.mobileCollapsed = !!collapsed;
    },
  },
});

export default app.reducer;
