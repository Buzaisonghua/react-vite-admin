import { createSlice } from '@reduxjs/toolkit';

// This slice manages the collapsed state of the sidebar
export const collapsed = createSlice({
  name: 'collapsed',
  initialState: {
    collapsed: false,
  },
  reducers: {
    changeCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export default collapsed.reducer;
