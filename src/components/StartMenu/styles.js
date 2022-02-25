import styled from 'styled-components';

export const FloatMenu = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 350px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 5px;
    color: white;
    z-index: 3;
    backdrop-filter: blur(2px);

    & p {
        font-weight: 200;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: var(--color-green);
    font-size: 1.5em;
    color: var(--color-dark);
    border-radius: 5px;
    padding: 5px 20px;
`;
