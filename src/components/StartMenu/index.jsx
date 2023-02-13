/* eslint-disable react/no-array-index-key */

import { useGame } from '../../hooks/Game';
import { FloatMenu, Button } from './styles';

const PlayButton = () => {
    const { start, restart, hasStarted, isDead } = useGame();

    return (
        (!hasStarted || isDead) && (
            <FloatMenu>
                <div className="mb-0 mb-lg-3">
                    {!hasStarted ? (
                        <Button
                            className="btn-block w-100"
                            type="button"
                            onClick={() => start()}
                        >
                            Start
                        </Button>
                    ) : (
                        <Button
                            className="btn-block w-100"
                            type="button"
                            onClick={() => restart()}
                        >
                            Restart
                        </Button>
                    )}
                </div>
                <p className="d-none d-lg-block">
                    Use the keyboard keys to move. Press [ESC] to pause the game
                </p>
            </FloatMenu>
        )
    );
};

export default PlayButton;
