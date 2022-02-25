import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;

    @media (max-width: 767px) {
        align-items: flex-start;
    }
`;

export const Logo = styled.p`
    margin: 0;
    font-size: 5rem;
    color: white;
    line-height: 1;

    @media (max-width: 767px) {
        font-size: 3em;
    }
`;

export const LogoCredit = styled.p`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 200;
    color: var(--color-purple);
    line-height: 1;
`;

export const Scores = styled.div`
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    font-size: 1.5rem;

    & p {
        margin: 0;
    }

    & b {
        color: white;
    }

    & span {
        color: var(--color-purple);
        margin-left: 15px;
    }
`;
