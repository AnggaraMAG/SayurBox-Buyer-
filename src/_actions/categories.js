import {API} from '../config/api';
import {GET_CATEGORY} from '../config/constants';

export const get_category = () => {
  console.log('asik');
  return {
    type: GET_CATEGORY,
    paylaod: async () => {
      try {
        const res = await API.get('/category');
        console.log(res, 'asik');
        return res.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  };
};
