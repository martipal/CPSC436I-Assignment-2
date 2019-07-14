import { combineReducers } from 'redux';

let defaults = [];

const messagesReducer = (messages= defaults, action) => {
    if (action.type === "CLEAR_MESSAGES"){
        return [];
    } else if (action.type === "ADD_MESSAGE"){
        let newArray = [action.payload];
        return newArray.concat(messages);
    }
    return messages;
};


export default combineReducers({
    messages: messagesReducer,
})

