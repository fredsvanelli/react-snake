import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    width: 55px;
    height: 75px;
    background-color: transparent;
    border: none;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
    }

    &::before,
    &::after {
        display: inline-block;
        width: 20px;
        height: 75px;
        background-color: var(--color-purple);
    }
`;
