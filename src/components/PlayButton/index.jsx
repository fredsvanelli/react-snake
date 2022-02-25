/* eslint-disable react/no-array-index-key */

import { useGame } from '../../hooks/Game';
import { Button } from './styles';

const PlayButton = () => {
    const { isRunning, unPause } = useGame();

    return !isRunning && <Button type="button" onClick={() => unPause()} />;
};

export default PlayButton;
