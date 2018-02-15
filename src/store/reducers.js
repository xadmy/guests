import {ACTION_CHANGE_GUEST, ACTION_CHANGE_COUPLE} from '../components/WebPage';

const initialState = {
  Guest: 'Andrey',
  Couple: true
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_CHANGE_GUEST:
          return {...state, Guest: action.payload};
      case ACTION_CHANGE_COUPLE:
          return {...state, Couple: action.payload};
    }

    return state;
}
