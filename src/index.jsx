import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GameProvider } from './hooks/Game';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GameProvider>
            <App />
        </GameProvider>
        <GlobalStyles />
    </React.StrictMode>,
    document.getElementById('root')
);
