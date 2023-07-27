import { all, takeLatest } from 'redux-saga/effects'
import { userSaga } from './userSaga'

export const rootSaga = function* () {
    yield all([
        takeLatest("USER_FETCH", userSaga.fetch),
        takeLatest("USER_POST", userSaga.post)
    ])
}