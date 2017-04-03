import * as types from 'constants/ActionTypes.js';

const PUSH_HISTORY = {type:types.PUSH_HISTORY};
const POP_HISTORY = {type:types.POP_HISTORY};

export const pushHistory = (path) => (dispatch,getState) => {
    dispatch({...PUSH_HISTORY,path:path});
}

export const popHistory = (path) => (dispatch,getState) => {
    dispatch(POP_HISTORY);
}