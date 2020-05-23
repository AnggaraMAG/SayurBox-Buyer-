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
