import { useGame } from '../../hooks/Game';
import { KeyboardContainer, Key, Center } from './styles';

const Keyboard = () => {
    const { moveUp, moveDown, moveLeft, moveRight } = useGame();

    return (
        <KeyboardContainer className="d-lg-none mb-4">
            <div>
                <div className="d-flex">
                    <Key
                        className="up"
                        onMouseDown={() => moveUp()}
                        onTouchStart={() => moveUp()}
                    />
                    <Key
                        className="right"
                        onMouseDown={() => moveRight()}
                        onTouchStart={() => moveRight()}
                    />
                </div>
                <div className="d-flex">
                    <Key
                        className="left"
                        onMouseDown={() => moveLeft()}
                        onTouchStart={() => moveLeft()}
                    />
                    <Key
                        className="down"
                        onMouseDown={() => moveDown()}
                        onTouchStart={() => moveDown()}
                    />
                </div>
                <Center />
            </div>
        </KeyboardContainer>
    );
};

export default Keyboard;
