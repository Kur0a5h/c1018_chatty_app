import types from './types';
import {db} from '../firebase';

export const getMessages = () => dispatch => {
    console.log('Get messages called');
    const dbRef = db.ref('/chat-logs');

    dbRef.on('value', (snapshot) =>{
        dispatch({
            type:types.GET_CHAT_MESSAGES,
            messages: snapshot.val()
        });
    });

    return dbRef;
}

export const sendMessage = message => dispatch => {
    db.ref('/chat-logs').push(message);
}
