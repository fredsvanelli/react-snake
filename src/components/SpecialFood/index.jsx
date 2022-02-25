/* eslint-disable react/no-array-index-key */
import { useGame } from '../../hooks/Game';

import { FoodItem } from './styles';

const SpecialFood = () => {
    const { specialFood, specialFoodTimer, foodSize, snakeCellSize } =
        useGame();

    return (
        specialFood.show && (
            <FoodItem
                style={{
                    width: foodSize,
                    height: foodSize,
                    top: specialFood.y * snakeCellSize + foodSize / 2,
                    left: specialFood.x * snakeCellSize + foodSize / 2,
                }}
            >
                <span>{specialFoodTimer}</span>
            </FoodItem>
        )
    );
};

export default SpecialFood;
