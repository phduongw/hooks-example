import {createContext, useState, useContext} from "react";
import {ThemeContext} from "./useContextFolder/ThemeProvider";

import './App.css';
import UseContextPage from "./useContextFolder/useContextPage";

function emitComments(idChannel) {
    setInterval(() => {
        window.dispatchEvent(new CustomEvent(`lesson-${idChannel}`, {
            detail: `Nội dung comment của lession ${idChannel}`
        }));
    }, 2000)
}

emitComments(1)
emitComments(2)
emitComments(3)


function App() {
    let context = useContext(ThemeContext);
    return (
        <div>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <UseContextPage/>
            {/*<UseReducerPage />*/}
            {/*<UseMemoPage />*/}
            {/*<UseRefPage />*/}
            {/*<UseLayoutEffectPage />*/}
            {/*<h1>Hello Guys</h1>*/}
            {/*<button onClick={() => setShow(!show)}>Show</button>*/}
            {/*{show && <Content/>}*/}
            {/*<SubscribeChannel />*/}
        </div>
    );
}

export default App;
