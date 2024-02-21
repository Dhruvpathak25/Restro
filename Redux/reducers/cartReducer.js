import {
  ADD_ITEM,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../actions/cartActions';

const initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      console.log('🚀 ~ itemsReducer ~ action:', action?.payload);
      return {
        // ...state,
        items: [action.payload],
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
