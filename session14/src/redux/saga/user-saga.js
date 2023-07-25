import { put, call } from 'redux-saga/effects'
import {userApi} from '../api/user-api'
import {userAction} from '../slice/userSlice'

export const userSaga = {
    fetch: function* () {
        try {
            let data = yield call(userApi.get);
            yield put(userAction.fetchData(data));
        } catch (error) {
            yield put()
        }
    }
}