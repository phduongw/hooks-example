import React, {Component, useReducer, useRef} from 'react';

import reducer, { initJob } from './reducer/reducer';
import { setJob, addJob, removeJob } from './reducer/action'

const PracticeUseReducer = () => {
    const inputRef = useRef();
    const [state, dispatch] = useReducer(reducer, initJob);
    const { job, jobs } = state;
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const handleRemove = (index) => {
        dispatch(removeJob(index));
    }

    return (
        <div>
            <h1>Todo</h1>
            <input
                ref={inputRef}
                value={job}
                type="text"
                placeholder="Emter todo..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    jobs.map((ele, index) => (
                        <li key={index}>
                            {ele}
                            <span onClick={() => handleRemove(index)}>&times;</span>
                        </li>))
                }
            </ul>
        </div>
    );
}

export default PracticeUseReducer;