const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_ITEM`:
      return {
        ...state,
        data: data.push(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;