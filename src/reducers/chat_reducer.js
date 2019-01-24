import types from '../actions/types';

const DEFAULT_STATE = {
    messages: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_CHAT_MESSAGES:
            console.log('ACTION:', action);
            return { ...state, messages: action.messages };
        default:
            return state;
    }
}