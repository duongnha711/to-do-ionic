import { COMPLETE_TASK, ADD_TASK } from "./../constants/constants"

export const actCompleteTask = (payload: any) => ({
    type: COMPLETE_TASK,
    payload
})


export const actAddTask = (payload: any) => ({
    type: ADD_TASK,
    payload
})