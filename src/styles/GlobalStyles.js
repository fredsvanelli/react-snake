import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --color-blue: #6ae4fc;
        --color-purple: #a77ae4;
        --color-purple-dark: #815fb0;
        --color-green: #34ff89;
        --color-yellow: #f0fb7f;
        --color-red: #e94444;
        --color-gray: #363841;
        --color-dark: #23252f;
        --color-white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, button {
        font-family: 'Kanit', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
