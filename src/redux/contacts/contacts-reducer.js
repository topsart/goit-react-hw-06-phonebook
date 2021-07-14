import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    // case types.ADD:
    //   if (state.find((contact) => contact.name === payload.name)) {
    //     alert(`${payload.name} already exist`);
    //     return;
    //   } else {
    //     return [...state, payload];
    // }

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
