import {ACTION_CHANGE_GUEST, ACTION_CHANGE_COUPLE} from '../components/WebPage';

export const changeGuest = (newGuest) =>{
    return {
        type: ACTION_CHANGE_GUEST,
        payload: newGuest
    };
};

export const changeCouple = (newCouple) => {
    return {
        type: ACTION_CHANGE_COUPLE,
        payload: newCouple
    };
};
