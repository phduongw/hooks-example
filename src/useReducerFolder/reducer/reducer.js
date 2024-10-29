import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants"

export const initJob = {
    job: '',
    jobs: []
}

const reducer = (jobState, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...jobState,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...jobState,
                jobs: [
                    ...jobState.jobs,
                    action.payload
                ]
            }
        case REMOVE_JOB:
            console.log("REMOVING")
            const newJobs = [...jobState.jobs];
            newJobs.splice(action.payload, 1);
            return {
                ...jobState,
                jobs: newJobs
            };
        default:
            throw new Error(`Unknown action: ${action}`);
    }
}

export default reducer;