import styled from 'styled-components';

export const SnakeCell = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: var(--color-purple);
    border: solid 1px var(--color-gray);
    border-radius: 3px;
    z-index: 2;

    &.is-dead {
        background-color: var(--color-red);
    }
`;
