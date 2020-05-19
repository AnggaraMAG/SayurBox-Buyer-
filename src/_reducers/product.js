import {GET_PRODUCT} from '../config/constants';

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PRODUCT}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_PRODUCT}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case `${GET_PRODUCT}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
