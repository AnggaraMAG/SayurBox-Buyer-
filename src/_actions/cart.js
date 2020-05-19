import {API} from '../config/api';

export const add_item = data => {
  return {
    type: 'ADD_ITEM',
    payload: async () => {
      return data;
    },
  };
};
