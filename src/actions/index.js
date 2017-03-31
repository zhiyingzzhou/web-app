import * as types from '../constants/ActionTypes.js';

export const userLogin = object => ({
    type: types.USERLOGIN
});

export const userRegister = text => ({
    type: types.USERREGISTER
});