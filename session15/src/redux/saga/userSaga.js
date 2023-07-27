import { put, call } from 'redux-saga/effects';
import { userApi } from '../api/user-api'
import { userAct } from '../slice/userSlice'

export const userSaga = {
    fetch: function* (action) {
        try {
            console.log(action);
            let data = yield call(userApi.getPaginations, action.payload);
            yield put(userAct.updatePage(action.payload || 1));
            yield put(userAct.fetchSuccess(data));
        } catch (error) {
            yield put("FETCH_ERROR");
        }
    },
    post: function* (action) {
        try {
            //call api post
            // update state pennding = true
            //yield put(userAct.setPennding(true));

            yield call(this.fetch, {type: 'USER_FETCH'});

            // let data = yield call(userApi.getPaginations);
            // yield put(userAct.updatePage(action.payload || 1));
            // yield put(userAct.fetchSuccess(data));

            //cal success
            //console.log("Post success");
            //yield put(userAct.setPennding(false));
            
        } catch (error