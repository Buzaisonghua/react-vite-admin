import { getUserInfoToken } from '@/api';
import { getToken } from '@/utils/token';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 定义初始状态
const initialState: StoreNamespace.UserStateMode = {
  userName: '',
  token: '',
  id: '',
  role: 0,
  avatar: '',
};

export const fetchUserSatateToken = createAsyncThunk(
  'user/fetchUserSatateToken',
  async () => {
    const token = getToken();
    const response = await getUserInfoToken(token || '');
    return response.data;
  },
);

// 创建 slice
export const user = createSlice({
  name: 'user', // 这个名字将作为 action 类型的前缀
  initialState,
  reducers: {
    // 登录
    setUserState: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;
    },
  },
  // 通过token获取用户信息
  extraReducers: (builder) => {
    builder.addCase(fetchUserSatateToken.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;
    });
  },
});

export default user.reducer;
