import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  // НЕ ПОЛУЧАЕТСЯ ДОБАВИТЬ ПРОВЕРКУ НА УЖЕ ИМЕЮЩЕЕСЯ ИМЯ!!!!
  // [actions.addContact]: (state, {payload}) => state.find((contact) => contact.name === payload.name ? alert(`${payload.name} already exist`) : [...state, payload]),
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
