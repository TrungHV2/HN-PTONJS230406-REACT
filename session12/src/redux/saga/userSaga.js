import { put } from 'redux-saga/effects'
import { userApi } from '../api/user-api'

export const fetchUser = function* (action) {
    try {
        console.log(action);
        console.log("B2: useSaga tiếp nhận action USER_FECTH");
        let data = yield userApi.get();
        console.log('userSage::fetchUser', data);
        console.log("B4: useSaga dispatch action USER_FETCH_DONE đến reducers");
        yield put({type: 'USER_FETCH_DONE', payload: data});
    } catch (error) {
        yield put({type: 'FETCH_ERROR'});
    }
} 