export const clearMessages =() =>
{
    return {
        type: "CLEAR_MESSAGES"
    };
}

export const addMessage = (message) =>
{
    return {
        type: "ADD_MESSAGE",
        payload: message
    };
}
