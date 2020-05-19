export {API} from '../config/api';
export {LOGIN, REGISTER} from '../config/constants';

export const register = (name, username, password, role) => {
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post('/register', {
        name,
        username,
        password,
        role,
      });
      return res.data;
    },
  };
};
