import * as ActionTypes from './ActionTypes';

export const Quiz = (state = {
        errMess: null,
        quizzes: [],

        activeQuiz = null,
        activeQuesNo = null,
        time = null,
        timerActive = false
    }, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_QUIZZES:
            return {...state, errMess: null, quizzes: action.payload};
            
        case ActionTypes.QUIZZES_FAILED:
            return {...state, errMess: action.payload, quizzes: []};
            
        default:
            return state;
    }
}