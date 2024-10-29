import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'

const ParagraphPage = () => {
    const context = useContext(ThemeContext);

    return (
        <div className={context.theme}>
            <h1>Đây là văn bản</h1>
        </div>
    );
}

export default ParagraphPage;