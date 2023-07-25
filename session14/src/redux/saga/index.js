import { all, takeLatest } from 'redux-saga/effects'
import {userSaga} from './user-saga'

export const rootSaga = function* () {
    yield all([
        takeLatest("USER_FETCH", userSaga.fetch)
    ])
}