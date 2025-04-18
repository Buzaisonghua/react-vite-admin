import { createSlice } from '@reduxjs/toolkit';

// This slice manages the collapsed state of the sidebar
export const app = createSlice({
  name: 'app',
  initialState: {
    collapsed: false,
  },
  reducers: {
    changeCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export default app.reducer;
