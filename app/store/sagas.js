import {all} from 'redux-saga/effects';
import {TestSagas} from '../features/test/sagas';

export default function* rootSaga() {
  yield all([...TestSagas]);
}
