import styled from 'styled-components';

export const FoodItem = styled.div`
    position: absolute;
    background-color: var(--color-yellow);
    z-index: 1;
    border-radius: 50%;

    & > span {
        position: absolute;
        bottom: -30px;
        left: 50%;
        font-weight: 200;
        color: var(--color-yellow);
        transform: translateX(-50%);
    }
`;
