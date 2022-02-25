import { useEffect } from 'react';
import { useGame } from './hooks/Game';
import { GameContainer } from './styles/App';

import Food from './components/Food';
import PauseButton from './components/PauseButton';
import PlayButton from './components/PlayButton';
import Snake from './components/Snake';
import SpecialFood from './components/SpecialFood';
import Stage from './components/Stage';
import StartMenu from './components/StartMenu';
import Header from './components/Header';
import Footer from './components/Footer';

import './assets/bootstrap.min.css';

const App = () => {
    const { onUpdate, setStageHeight } = useGame();

    useEffect(() => {
        const { clientHeight, clientWidth } =
            document.getElementById('stage-box');

        setStageHeight(clientWidth < clientHeight ? clientWidth : clientHeight);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="game">
            <GameContainer onUpdate={e => onUpdate(e)}>
                <PlayButton />
                <PauseButton />
                <Header />
                <Stage>
                    <Snake />
                    <Food />
                    <SpecialFood />
                    <StartMenu />
                </Stage>
                <Footer />
            </GameContainer>
        </div>
    );
};

export default App;
