/* eslint-disable react/no-array-index-key */

import { useGame } from '../../hooks/Game';
import { Button } from './styles';

const PauseButton = () => {
    const { isRunning, pause } = useGame();

    return isRunning && <Button type="button" onClick={() => pause()} />;
};

export default PauseButton;
