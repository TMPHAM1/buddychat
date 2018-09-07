import types from './types.js';
export function updateChat(snapshot) {
    return { 
        type: types.UPDATE_CHAT_LOG,
        payload: snapshot.val()
    }
}