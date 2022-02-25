/* eslint-disable react/no-array-index-key */
import { useCallback } from 'react';
import { useGame } from '../../hooks/Game';

import { SnakeCell } from './styles';

const Snake = () => {
    const { snake, snakeCellSize, isDead, currentDirection } = useGame();

    const getClassName = useCallback(
        i => {
            const classes = [];

            if (isDead) classes.push('is-dead');
            if (i === 0) classes.push(`first ${currentDirection}`);
            if (i + 1 === snake.length)
                classes.push(`last ${currentDirection}`);

            return classes.join(' ');
        },
        [isDead, currentDirection, snake.length]
    );

    return snake.map((snakeCell, i) => (
        <SnakeCell
            key={i}
            style={{
                width: snakeCellSize,
                height: snakeCellSize,
                top: snakeCell.y * snakeCellSize + snakeCellSize / 2,
                left: snakeCell.x * snakeCellSize + snakeCellSize / 2,
            }}
            className={getClassName(i)}
        />
    ));
};

export default Snake;
