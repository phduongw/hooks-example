import React, {Component, memo} from 'react';

const MemoHocPage = ({ onIncrement }) => {
    console.log("MemoHocPage: Re-rendering");
    return (
        <div>
            <h2>Hello Anh Em F8</h2>
            <button onClick={onIncrement}>Click me</button>
        </div>
    );
}

export default memo(MemoHocPage);