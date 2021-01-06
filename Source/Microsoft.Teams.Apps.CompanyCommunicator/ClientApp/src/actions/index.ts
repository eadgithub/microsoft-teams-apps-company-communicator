import { formatDate } from '../i18n';
import { getSentNotifications, getDraftNotifications, getFilteredSentNotifications } from '../apis/messageListApi';

type Notification = {
	createdDateTime: string;
	failed: number;
	id: string;
	isCompleted: boolean;
	sentDate: string;
	sendingStartedDate: string;
	sendingDuration: string;
	succeeded: number;
	throttled: number;
	title: string;
	totalMessageCount: number;
	createdBy: string;
	DepartmentName: string;
	SenderName: string;
};

export const selectMessage = (message: any) => {
	return {
		type: 'MESSAGE_SELECTED',
		payload: message
	};
};

export const getMessagesList = () => async (dispatch: any) => {
	const response = await getSentNotifications();
	const notificationList: Notification[] = response.data;
	notificationList.forEach((notification) => {
		notification.sendingStartedDate = formatDate(notification.sendingStartedDate);
		notification.sentDate = formatDate(notification.sentDate);
	});
	dispatch({ type: 'FETCH_MESSAGES', payload: notificationList });
};

export const getFilteredList = (query: string) => async (dispatch: any) => {
	const response = await getFilteredSentNotifications(query);
	const notificationList: Notification[] = response.data;
	console.log("Filtered:", notificationList);
	notificationList.forEach((notification) => {
		notification.sendingStartedDate = formatDate(notification.sendingStartedDate);
		notification.sentDate = formatDate(notification.sentDate);
	});
	
	dispatch({ type: 'FETCH_FILTEREDMESSAGES', payload: notificationList });
};

export const getDraftMessagesList = () => async (dispatch: any) => {
	const response = await getDraftNotifications();
	dispatch({ type: 'FETCH_DRAFTMESSAGES', payload: response.data });
};

export const searchBarChanged = (event: any) => {
	console.log(event.value);
	const response = event;
	return {
		type: 'SEARCH_MESSAGES',
		payload: response.value
	};
};
