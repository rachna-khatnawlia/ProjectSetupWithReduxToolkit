import {login, logout} from '../reducers/authReducer';
import {store} from '../store';

const {dispatch} = store;

export const loginAction = data => {
  console.log(data, 'dataaaaa>>>>>>>');
  dispatch(login());
};

export const logoutAction = () => {
  console.log('logout dataaaaa>>>>>>>');
  dispatch(logout());
};
