import {API} from '../config/api';
import {GET_CATEGORY} from '../config/constants';

export const get_category = () => {
  return {
    type: GET_CATEGORY,
    paylaod: async () => {
      const res = await API.get('/category');
      return res.data;
    },
  };
};
