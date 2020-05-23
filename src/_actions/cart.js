export const add_item = (prevData, data) => {
  prevData.push(data);
  return {
    type: 'ADD_ITEM',
    payload: () => {
      let newData = prevData;
      return newData;
    },
  };
};

export const remove_item = newData => {
  return {
    type: 'REMOVE_ITEM',
    payload: () => newData,
  };
};
