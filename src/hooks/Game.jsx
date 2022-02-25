import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
    useEffect,
} from 'react';

import { getRandomNumberBetween } from '../helpers';

export const GameContext = createContext({});

export const useGame = () => {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error('useGame must be within GameProvider');
    }

    return context;
};

const stageSize = 20;
const ticInterval = 50;
const specialScore = 10;
const specialFoodScoreInterval = 10;
const specialFoodTimeInterval = 10 * 1000;
const localStorageKey = '@snakeinfinity:scores';

const directions = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
};

const opositeDirections = {
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left',
};

const inputs = {
    ArrowUp: directions.up,
    ArrowDown: directions.down,
    ArrowLeft: directions.left,
    ArrowRight: directions.right,
    w: directions.up,
    s: directions.down,
    a: directions.left,
    d: directions.right,
};

const specialInputs = {
    Escape: 'Escape',
};

const initialSnake = [
    { x: 11, y: 3 },
    { x: 10, y: 3 },
    { x: 9, y: 3 },
];

export const GameProvider = ({ children }) => {
    const [hasStarted, setStarted] = useState(false);
    const [isRunning, setRunning] = useState(false);
    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState({ x: 0, y: 0 });
    const [specialFood, setSpecialFood] = useState({ x: 0, y: 0, show: false });
    const [specialFoodTimer, setSpecialFoodTimer] = useState(
        specialFoodTimeInterval.toFixed(1)
    );
    const [totalEatenFood, setTotalEatenFood] = useState(0);
    const [isDead, setDead] = useState(false);
    const [lastTicTime, setLastTicTime] = useState(0);
    const [currentDirection, setCurrentDirection] = useState(null);
    const [stageHeight, setStageHeight] = useState(0);

    const [scores, setScores] = useState({
        current: 0,
        highScore: 0,
    });

    const snakeCellSize = useMemo(() => stageHeight / stageSize, [stageHeight]);
    const foodSize = useMemo(() => stageHeight / stageSize / 2, [stageHeight]);

    const returnFocus = useCallback(() => {
        document.querySelector('#game').firstElementChild.focus();
    }, []);

    const start = useCallback(() => {
        returnFocus();
        setStarted(true);
        setRunning(true);
    }, [returnFocus]);

    const pause = useCallback(() => {
        returnFocus();
        setRunning(false);
    }, [returnFocus]);

    const unPause = useCallback(() => {
        returnFocus();
        setRunning(true);
    }, [returnFocus]);

    const moveTo = useCallback(direction => {
        setCurrentDirection(direction);

        setSnake(prev => {
            const reversePrev = [...prev].reverse();

            return reversePrev
                .map((cell, i) => {
                    if (reversePrev.length === i + 1) {
                        let { x, y } = cell;

                        switch (direction) {
                            case directions.up:
                                y = y > 0 ? y - 1 : stageSize - 1;
                                break;
                            case directions.down:
                                y = y < stageSize - 1 ? y + 1 : 0;
                                break;
                            case directions.left:
                                x = x > 0 ? x - 1 : stageSize - 1;
                                break;
                            case directions.right:
                                x = x < stageSize - 1 ? x + 1 : 0;
                                break;
                            default:
                        }

                        return { x, y };
                    }

                    return { x: reversePrev[i + 1].x, y: reversePrev[i + 1].y };
                })
                .reverse();
        });
    }, []);

    const [moveInDirection, setMoveInDirection] = useState(null);

    const startSpecialFoodTimer = useCallback(() => {
        const endTime = (new Date().getTime() + specialFoodTimeInterval) / 1000;

        const timerInterval = setInterval(() => {
            const now = new Date().getTime() / 1000;

            if (endTime - now > 0) {
                setSpecialFoodTimer((endTime - now).toFixed(1));
            } else {
                setSpecialFood(prev => ({ ...prev, show: false }));
                clearInterval(timerInterval);
            }
        }, 100);
    }, []);

    const generateFood = useCallback(
        (isSpecial = false) => {
            const x = getRandomNumberBetween(0, stageSize - 1);
            const y = getRandomNumberBetween(0, stageSize - 1);

            if (snake.find(cell => cell.x === x && cell.y === y)) {
                generateFood(isSpecial);
            } else if (isSpecial) {
                setSpecialFood({ x, y, show: true });
                startSpecialFoodTimer();
            } else {
                setFood({ x, y });
            }
        },
        [snake, startSpecialFoodTimer]
    );

    const generateSpecialFood = useCallback(
        () => generateFood(true),
        [generateFood]
    );

    const loadScores = useCallback(() => {
        setScores({
            current: 0,
            highScore: parseInt(
                localStorage.getItem(localStorageKey) ?? '0',
                10
            ),
        });
    }, []);

    const reset = useCallback(() => {
        setSnake(initialSnake);
        setDead(false);
        loadScores();
        setMoveInDirection(directions.right);
        setCurrentDirection(directions.right);
        generateFood();
        setSpecialFood(prev => ({ ...prev, show: false }));
        setTotalEatenFood(0);
    }, [generateFood, loadScores]);

    const restart = useCallback(() => {
        reset();
        start();
    }, [reset, start]);

    useEffect(() => {
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const growSnake = useCallback(
        (isSpecial = false) => {
            let { x, y } = snake[snake.length - 1];

            switch (currentDirection) {
                case directions.up:
                    y -= 1;
                    break;
                case directions.down:
                    y += 1;
                    break;
                case directions.left:
                    x += 1;
                    break;
                case directions.right:
                    x -= 1;
                    break;
                default:
            }

            const points = isSpecial ? specialScore : 1;

            setScores(prev => ({
                current: prev.current + points,
                highScore:
                    prev.current + points > prev.highScore
                        ? prev.current + points
                        : prev.highScore,
            }));

            setSnake([...snake, ...[{ x, y }]]);
        },
        [currentDirection, snake]
    );

    const eatFood = useCallback(() => {
        generateFood();
        growSnake();
        setTotalEatenFood(totalEatenFood + 1);
        if ((totalEatenFood + 1) % specialFoodScoreInterval === 0) {
            generateSpecialFood();
        }
    }, [generateFood, generateSpecialFood, growSnake, totalEatenFood]);

    const eatSpecialFood = useCallback(() => {
        setSpecialFood(prev => ({ ...prev, show: false }));
        growSnake(true);
    }, [growSnake]);

    const checkIfGotTheFood = useCallback(() => {
        if (snake[0].x === food.x && snake[0].y === food.y) {
            eatFood();
        }
    }, [eatFood, food.x, food.y, snake]);

    const checkIfGotTheSpecialFood = useCallback(() => {
        if (
            snake[0].x === specialFood.x &&
            snake[0].y === specialFood.y &&
            specialFood.show
        ) {
            eatSpecialFood();
        }
    }, [eatSpecialFood, snake, specialFood.show, specialFood.x, specialFood.y]);

    const move = useCallback(() => {
        moveTo(moveInDirection);
    }, [moveInDirection, moveTo]);

    const die = useCallback(() => {
        setDead(true);
        setRunning(false);
        localStorage.setItem(localStorageKey, scores.highScore);
    }, [scores]);

    const checkCollision = useCallback(() => {
        if (
            snake.find(
                (cell, i) =>
                    i > 0 && cell.x === snake[0].x && cell.y === snake[0].y
            )
        ) {
            die();
            return true;
        }
        return false;
    }, [die, snake]);

    const tic = useCallback(() => {
        if (!checkCollision()) {
            checkIfGotTheFood();
            checkIfGotTheSpecialFood();
            move();
        }
    }, [checkCollision, checkIfGotTheFood, checkIfGotTheSpecialFood, move]);

    const registerInput = useCallback(
        _inputs => {
            if (_inputs.length) {
                const currentKey = _inputs.find(
                    input => input.name === 'onKeyDown'
                )?.payload?.key;

                if (
                    currentKey === specialInputs.Escape &&
                    hasStarted &&
                    !isDead
                ) {
                    setRunning(prev => !prev);
                }

                if (
                    currentKey &&
                    inputs[currentKey] &&
                    opositeDirections[inputs[currentKey]] !== currentDirection
                ) {
                    setMoveInDirection(directions[inputs[currentKey]]);
                }
            }
        },
        [currentDirection, hasStarted, isDead]
    );

    const onUpdate = useCallback(
        e => {
            if (isRunning) {
                registerInput(e.input);

                if (e.time.current - lastTicTime >= ticInterval) {
                    tic();
                    setLastTicTime(e.time.current);
                }
            }
        },
        [isRunning, lastTicTime, registerInput, tic]
    );

    const providerValue = useMemo(
        () => ({
            hasStarted,
            snake,
            food,
            snakeCellSize,
            foodSize,
            scores,
            isRunning,
            isDead,
            currentDirection,
            stageHeight,
            specialFood,
            specialFoodTimer,
            start,
            setStageHeight,
            onUpdate,
            pause,
            unPause,
            restart,
        }),
        [
            hasStarted,
            snake,
            food,
            snakeCellSize,
            foodSize,
            scores,
            isRunning,
            isDead,
            currentDirection,
            stageHeight,
            specialFood,
            specialFoodTimer,
            start,
            onUpdate,
            pause,
            unPause,
            restart,
        ]
    );

    return (
        <GameContext.Provider value={providerValue}>
            {children}
        </GameContext.Provider>
    );
};
