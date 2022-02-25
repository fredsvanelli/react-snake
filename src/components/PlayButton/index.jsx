/* eslint-disable react/no-array-index-key */

import { useGame } from '../../hooks/Game';
import { Button } from './styles';

const PlayButton = () => {
    const { hasStarted, isRunning, unPause } = useGame();

    return (
        hasStarted &&
        !isRunning && (
            <Button
                className="d-none d-lg-inline-block"
                type="button"
                onClick={() => unPause()}
            />
        )
    );
};

export default PlayButton;
