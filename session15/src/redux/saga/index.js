import { all, takeLatest } from 'redux-saga/effects'
import { userSaga } from './userSaga'
import { productSaga } from './productSaga'
import { categorySaga } from './categorySaga'

export const rootSaga = function* () {
    yield all([
        takeLatest("USER_FETCH", userSaga.fetch),
        takeLatest("USER_POST", userSaga.post),
        takeLatest("PRODUCT_FECTH", productSaga.fetch),
        takeLatest("PRODUCT_POST", productSaga.post),
        takeLatest("PRODUCT_PUT", productSaga.put),
        takeLatest("CATEGORY_FECTH", categorySaga.fetch),
    ])
}