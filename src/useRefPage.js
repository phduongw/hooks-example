import React, {useCallback, useRef} from 'react';
import MemoHocPage from "./MemoHOCPage";

const UseRefPage = () => {
    const [count, setCount] = React.useState(0);
    const [count2, setCount2] = React.useState(0);

    let timerId = useRef(99);
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(pre => pre + 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    //Use Callback
    const handleCount2 = useCallback(() => {
        setCount2(pre => pre + 1);
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <h1 style={{color: "red"}}>{count2}</h1>
            <MemoHocPage onIncrement = {handleCount2}/>
        </div>
    );
}

export default UseRefPage;