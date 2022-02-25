import styled from 'styled-components';

export const StageContainer = styled.div`
    display: flex;
    flex-grow: 1;
    max-height: 60vh;

    @media (max-width: 767px) {
        max-height: 40vh;
    }
`;

export const StageBox = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    align-self: stretch;
    background-color: var(--color-gray);
    border-radius: 5px;
`;
