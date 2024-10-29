import React, {useReducer} from 'react';
import PracticeUseReducer from "./PracticeUseReducer";

const initState = 0;
const UP_ACTION = 'UP';
const DOWN_ACTION = 'DOWN';

//Reducer
const reducer = (currentState, action) => {
    console.log("Reducer running")
    switch (action) {
        case UP_ACTION:
            return currentState + 1;
        case DOWN_ACTION:
            return currentState - 1;
        default:
            throw new Error(`Unknown action: ${action}`);
    }
}

const UseReducerPage = () => {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                dispatch(UP_ACTION);
            }}>+
            </button>
            <button onClick={() => {
                dispatch(DOWN_ACTION);
            }}>-
            </button>
            <PracticeUseReducer/>
        </div>
    );
}

export default UseReducerPage;