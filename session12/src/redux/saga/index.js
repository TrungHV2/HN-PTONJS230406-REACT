import {all, takeLatest} from 'redux-saga/effects'
import * as userSaga from '../saga/userSaga'

export const rootSaga = function* () {
    yield all([
        takeLatest("USER_FECTH", userSaga.fetchUser)
    ])
}