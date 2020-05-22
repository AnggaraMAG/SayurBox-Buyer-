export const add_item = data => {
  return {
    type: 'ADD_ITEM',
    payload: () => {
      return data;
    },
  };
};
