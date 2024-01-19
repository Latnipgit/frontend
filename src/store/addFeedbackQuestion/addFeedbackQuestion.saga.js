import { takeLatest, call, put, all, fork, takeEvery } from "redux-saga/effects"

import { addFeedbackQuestionSuccess, addFeedbackQuestionFailure } from "./addFeedbackQuestion.action"
import { ADD_FEEDBACK_QUESTION_START } from "./addFeedbackQuestion.type"

import { addQuestionApi } from "helpers/fakebackend_helper"




export function* addFeedbackQuestionAsync(payload) {
  try {
    const response = yield call(addQuestionApi, payload.payload)
    yield put(addFeedbackQuestionSuccess(response.data.response))
  } catch (error) {
    yield put(addFeedbackQuestionFailure(error))
  }
}


export function* onaddFeedbackQuestion() {
  yield takeEvery(ADD_FEEDBACK_QUESTION_START, addFeedbackQuestionAsync)
}

export function* AddQuestionFeedbackQuestionSaga() {
  yield all([fork(onaddFeedbackQuestion)])
}
