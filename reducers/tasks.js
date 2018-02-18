import { FETCHING_TASKS, FETCHING_TASKS_SUCCESS, FETCHING_TASKS_FAILURE } from '../constants'

const initialState = {
    tasks:[],
    isFetching: false,
    error:false
}

export default function taskReducer (state = initialState, action){
    switch(action.type){
        case FETCHING_TASKS:
            return {
                ...state,
                tasks:[],
                isFetching: true
            }
        case FETCHING_TASKS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                tasks: action.tasks
            }
        case FETCHING_TASKS_FAILURE:
            return {
                ...state,
                isFetching:false,
                error:true
            }
        default:
            return state
    }
}