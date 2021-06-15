import * as notificationConstants from '../constants/notification';

export const noticeError = error => ({
    type: notificationConstants.ERROR_NOTIFY,
    payload: error
});

export const clearNotification = () => ({
    type: notificationConstants.CLEAR_NOTIFICATION,
})