import {API} from '../config/api';
import {GET_PRODUCT} from '../config/constants';

export const get_product = () => {
  return {
    type: GET_PRODUCT,
    payload: async () => {
      try {
        const res = await API.get('/product');
        console.log(res, 'oi lur');
        return res;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  };
};
