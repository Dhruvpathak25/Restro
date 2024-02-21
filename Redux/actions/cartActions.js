export const ADD_ITEM = 'ADD_ITEM';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
