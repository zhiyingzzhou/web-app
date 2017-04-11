import {COLLECTION_LIST} from 'constants/ActionTypes';

const initialState = {
    collectionList: []
};

export default function collection(state = initialState,actions){
    switch(actions.type){
        case COLLECTION_LIST: 
            return {...state,collectionList:actions.collectionList};
        default: 
            return state;
    }
} 