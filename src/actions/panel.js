import * as types from 'constants/ActionTypes.js';

const OPEN_PANEL = {type:types.OPEN_PANEL};
const CLOSE_PANEL = {type:types.CLOSE_PANEL};

// 打开侧边栏
export const openPanel = () => (dispatch,getState) => {
    dispatch(OPEN_PANEL);
}

// 关闭侧边栏
export const closePanel = () => (dispatch,getState) => {
    dispatch(CLOSE_PANEL);
}