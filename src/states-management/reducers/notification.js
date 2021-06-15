import * as notificationConstant from '../constants/notification';

const initialState = {
    message: null,
    noticeType: 'error',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case notificationConstant.ERROR_NOTIFY:
            const { message } = action.payload;
            return {
                ...state,
                message,
                noticeType: 'error',
            };
        case notificationConstant.CLEAR_NOTIFICATION:
            return {
                ...state,
                message: null,
            };
        default:
            return state;
    }
};

export default reducer;