/* eslint-disable react/no-array-index-key */

import { useGame } from '../../hooks/Game';
import { FloatMenu, Button } from './styles';

const PlayButton = () => {
    const { start, restart, hasStarted, isDead } = useGame();

    return (
        (!hasStarted || isDead) && (
            <FloatMenu>
                {!hasStarted ? (
                    <Button type="button" onClick={() => start()}>
                        Iniciar
                    </Button>
                ) : (
                    <Button type="button" onClick={() => restart()}>
                        Reiniciar
                    </Button>
                )}
                <p>
                    Utilize as setas do teclado para se mover. Para pausar o
                    jogo pressione a tecla [ESC]
                </p>
            </FloatMenu>
        )
    );
};

export default PlayButton;
