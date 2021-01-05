import * as ActionTypes from './ActionTypes';

export const loadQuizzes = (quizzes) => (dispatch) => {
    dispatch({
        type: ActionTypes.LOAD_QUIZZES,
        payload: quizzes
    });
}