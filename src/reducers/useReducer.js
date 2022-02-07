import {
  ADD_SUCCESS,
 FAIL,
RESET,
  REMOVE_SUCCESS,
} from '../constants/constants'

export const Reduces = (state = {}, action) => {
  switch (action.type) {
    case ADD_SUCCESS:    
      console.log(action.payload);  
    return  {success: true, ...state, cart: [...state.cart,action.payload]}
    case REMOVE_SUCCESS:
        return {success: true, ...state, info: [...state.info,action.payload]}
    case FAIL:
      return { loading: false, error: action.payload}
    case RESET:
      return {}
    default:
      return state
  }
}

