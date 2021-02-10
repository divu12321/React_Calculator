import {
  UPDATE_VALUE_1, 
  UPDATE_VALUE_2,
  RESULT
  } from './types';
  
  const initialUserState = {
    value1   : '',
    value2   : '',
  };
  export default (state = initialUserState, {type, payload}) => {
    switch (type) {
      case UPDATE_VALUE_1:
        return {
          ...state,
          value1: payload,
      }; 
      case UPDATE_VALUE_2:
        return {
          ...state,
          value2: payload,
      }; 
      case RESULT:
        return {
          ...state,
          result: payload,
      }; 
      default:
        return {...state};
    }
  };