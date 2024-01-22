import {
  GET_FEEDBACKQUESTION,
  GET_FEEDBACKQUESTION_FAIL,
  GET_FEEDBACKQUESTION_SUCCESS,
} from "./feedbackquestionList.actiontype"

import { createAction } from "store/utils/reducer/reducer.utils";

export const getFeebBackQuestionList = () => createAction(GET_FEEDBACKQUESTION)

export const getFeebBackQuestionListSuccess = (data) => createAction(GET_FEEDBACKQUESTION_SUCCESS, data)

export const getFeebBackQuestionListFail = (error) => createAction(GET_FEEDBACKQUESTION_FAIL, error)

