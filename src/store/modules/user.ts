import type { Action } from 'redux';

const initState: StoreNamespace.UserStateMode = {
  username: '',
  token: '',
  id: 0,
  role: 0,
  avatar: '',
};

function reducer(state = initState, action: Action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
