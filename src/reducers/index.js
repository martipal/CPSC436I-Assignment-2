import { combineReducers } from 'redux';

let defaults = ["Most recently added message",
"best beaches in vancouver",
"Where to go camping?",
"Indonesia", 
"Hello!",
"Learn React",
"Yes",
"@#()!",
"12345",
"Oldest message"];

const messagesReducer = (messages= defaults, action) => {
    if (action.type === "CLEAR_MESSAGES"){
        return [];
    } else if (action.type === "ADD_MESSAGE"){
        let newArray = [action.payload.toString()];
        return newArray.concat(messages);
    }
    return messages;
};


export default combineReducers({
    messages: messagesReducer,
})

