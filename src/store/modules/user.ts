import { getUserInfoToken } from '@/api';
import { getToken } from '@/utils/token';
import { createSlice } from '@reduxjs/toolkit';

// 定义初始状态
const initialState: StoreNamespace.UserStateMode = {
  username: '',
  token: '',
  id: '',
  role: 0,
  avatar: '',
};

// 创建 slice
export const user = createSlice({
  name: 'user', // 这个名字将作为 action 类型的前缀
  initialState,
  reducers: {
    // 登录
    setUserState: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;
    },
    // 通过token获取用户信息
    getUserStateToken: (state) => {
      const token = getToken();
      getUserInfoToken(token || '').then(({ data }) => {
        state.username = data.username;
        state.token = data.token;
        state.id = data.id;
        state.role = data.role;
        state.avatar = data.avatar;
      });
    },
  },
});

export default user.reducer;
