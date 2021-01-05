import { combineReducers } from 'redux';
import Cards from './cards';
import CardData from './cardData';

export const selectedMessageReducer = (selectedMessage = null, action: { type: string; payload: any }) => {
	if (action.type === 'MESSAGE_SELECTED') {
		return action.payload;
	}
	return selectedMessage;
};

export const messagesListReducer = (messages = [], action: { type: string; payload: any }) => {
	if (action.type === 'FETCH_MESSAGES') {
		return action.payload;
	}
	if (action.type === 'SEARCH') {
		return action.payload;
    }
	return messages;
};



export const draftmessagesListReducer = (draftMessages = [], action: { type: string; payload: any }) => {
	if (action.type === 'FETCH_DRAFTMESSAGES') {
		return action.payload;
	}
	return draftMessages;
};

export default combineReducers({
	messagesList: messagesListReducer,
	draftMessagesList: draftmessagesListReducer,
	selectedMessage: selectedMessageReducer,
	cards: Cards,
	cardData: CardData
});
