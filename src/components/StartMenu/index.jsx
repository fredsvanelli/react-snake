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
                            Iniciar
                        </Button>
                    ) : (
                        <Button
                            className="btn-block w-100"
                            type="button"
                            onClick={() => restart()}
                        >
                            Reiniciar
                        </Button>
                    )}
                </div>
                <p className="d-none d-lg-block">
                    Utilize as setas do teclado para se mover. Para pausar o
                    jogo pressione a tecla [ESC]
                </p>
            </FloatMenu>
        )
    );
};

export default PlayButton;
