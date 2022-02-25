import styled from 'styled-components';

export const KeyboardContainer = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    & > div {
        transform: rotate(45deg);
    }
`;

export const Key = styled.div`
    position: relative;
    width: 130px;
    height: 130px;
    background-color: var(--color-purple);
    border: solid 1px var(--color-dark);

    &::before {
        content: '';
        position: absolute;
        top: 50px;
        left: 50px;
        width: 0;
        height: 0;
        border-style: solid;
    }

    &.up {
        border-top-left-radius: 100%;

        &::before {
            border-width: 30px 30px 0 0;
            border-color: var(--color-purple-dark) transparent transparent
                transparent;
        }
    }

    &.right {
        border-top-right-radius: 100%;

        &::before {
            border-width: 0 30px 30px 0;
            border-color: transparent var(--color-purple-dark) transparent
                transparent;
        }
    }

    &.down {
        border-bottom-right-radius: 100%;
        &.down::before {
            border-width: 0 0 30px 30px;
            border-color: transparent transparent var(--color-purple-dark)
                transparent;
        }
    }

    &.left {
        border-bottom-left-radius: 100%;

        &.left::before {
            border-width: 30px 0 0 30px;
            border-color: transparent transparent transparent
                var(--color-purple-dark);
        }
    }
`;

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: var(--color-dark);
    border-radius: 50%;
`;
