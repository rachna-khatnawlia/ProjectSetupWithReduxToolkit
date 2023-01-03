import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userLoginStatus: false,
};

export const authReducer = createSlice({
  name: 'Blyncc',
  initialState,
  reducers: {
    login: (state) => {
      console.log('loginReducer');
      // state.userLoginStatus = data?.payload;
      state.userLoginStatus = true;
    },
    logout: state => {
      state.userLoginStatus = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = authReducer.actions;

export default authReducer.reducer;
