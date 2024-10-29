import React, {useEffect, useLayoutEffect} from 'react';

const UseLayoutEffectPage = () => {
    const [count, setCount] = React.useState(0);
    const [fixCount, setFixCount] = React.useState(0);
    // Case Wrong start
    useEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count]);

    const handleCount = () => {
        setCount(pre => pre + 1)
    }
    // Case Wrong end

    //Fix start
    useLayoutEffect(() => {
        if (fixCount > 3) {
            setFixCount(0)
        }
    }, [fixCount]);

    const handleFixCount = () => {
        setFixCount(pre => pre + 1)
    }
    //Fix end

    return (
        <div>
            {/*Case wrong*/}
            <div>
                <h1>${count}</h1>
                <button onClick={handleCount}>Run</button>
            </div>

            {/*Fix*/}
            <div>
                <h1>${fixCount}</h1>
                <button onClick={handleFixCount}>Run</button>
            </div>
        </div>
    );
}

export default UseLayoutEffectPage;