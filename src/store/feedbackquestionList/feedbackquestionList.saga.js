import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_FEEDBACKQUESTION
} from "./feedbackquestionList.actiontype";
import {

  getFeebBackQuestionListFail,
  getFeebBackQuestionListSuccess

} from "./feedbackquestionList.actions";

import { getFeebBackQuestionListAPI } from "helpers/fakebackend_helper";


function* getFeedbackQuestionSaga() {
  try {
    const response = yield call(getFeebBackQuestionListAPI)
    yield put(getFeebBackQuestionListSuccess(response.data.response))
  } catch (error) {
    yield put(getFeebBackQuestionListFail(error))
  }
}
function* FeedbackQuestionListSaga() {
  yield takeEvery(GET_FEEDBACKQUESTION, getFeedbackQuestionSaga)
}

export default FeedbackQuestionListSaga;
