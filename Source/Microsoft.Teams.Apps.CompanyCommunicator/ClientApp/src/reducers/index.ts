import { combineReducers } from 'redux';

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

export const filteredListReducer = (messages = [], action: { type: string; payload: any }) => {
	if (action.type === 'FETCH_FILTEREDMESSAGES') {
		return action.payload;
	}
	return messages;
};

export const searchBarReducer = (searchedText = null, action: { type: string; payload: any }) => {
	if (action.type === 'SEARCH_MESSAGES') {
		return action.payload;
	}
	return searchedText;
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
	filteredList: filteredListReducer,
	searchedText: searchBarReducer
});
