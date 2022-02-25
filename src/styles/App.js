import { GameLoop } from 'react-game-engine';
import styled from 'styled-components';

export const GameContainer = styled(GameLoop)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: var(--color-dark);
`;
