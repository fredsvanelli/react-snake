/* eslint-disable react/no-array-index-key */
import { useGame } from '../../hooks/Game';

import { FoodItem } from './styles';

const Food = () => {
    const { food, foodSize, snakeCellSize } = useGame();

    return (
        <FoodItem
            style={{
                width: foodSize,
                height: foodSize,
                top: food.y * snakeCellSize + foodSize / 2,
                left: food.x * snakeCellSize + foodSize / 2,
            }}
        />
    );
};

export default Food;
