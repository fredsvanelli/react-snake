import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 15px 0;

    @media (max-width: 767px) {
        padding-top: 30px;
    }
`;

export const Scores = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        margin: 0 10px;
        text-align: center;
    }

    & > div p > b {
        color: #fff;
        font-size: 2rem;
    }

    & div > span {
        color: var(--color-purple);
        font-size: 2rem;
    }
`;

export const Credits = styled.p`
    text-align: center;
    padding: 20px 0;
    color: #666;

    a {
        text-decoration: none;
        color: #888;

        &:hover {
            text-decoration: underline;
        }
    }
`;
