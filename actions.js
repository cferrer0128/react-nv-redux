import { FETCHING_TASKS, FETCHING_TASKS_SUCCESS, FETCHING_TASKS_FAILURE } from './constants'

export function fetchTasksFromAPI(){

    return (dispatch) => {
        dispatch(getTasks())
        fetch('https://myionic.azurewebsites.net/api/tasks')
        .then(data => data.json())
        .then(json => {
            console.log('Tasks ', json)
            dispatch(getTasksSuccess(json))
        })
        .catch(err => dispatch(getTasksFailure(err)))
    }
}

export function  getTasks(){
    return {
        type: FETCHING_TASKS
    }
}

export function getTasksSuccess(tasks){
    return {
        type: FETCHING_TASKS_SUCCESS,
        tasks
    }
}

export function getTasksFailure(){
    return {
        type: FETCHING_TASKS_FAILURE
    }
}