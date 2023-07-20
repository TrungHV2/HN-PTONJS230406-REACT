
const initState = [];

export const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'USER_FETCH_DONE':
            console.log("B5: userReducer tiếp nhận action USER_FETCH_DONE từ userSaga cập nhật dữ liệu cho sate users");
            return [...action.payload];
        default:
            return state;
    }
}