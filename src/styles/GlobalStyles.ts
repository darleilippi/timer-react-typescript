import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Montserrat, serif;
    }

    #root {
        height: 100vh;
        width: 100vw;
    }

    .app {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 100%;

        color: var(--text-color);
        background-color: var(--bg-color);

        transition: all 0.5s;
    }

    .app.light {
        --bg-color: #ffffff;
        --text-color: #4a4a4a;

        --border-color: #4a4a4a;

        --details: #22a84a;
        --content: #2c2c2c;
        --content-text: #ffffff;
    }

    .app.dark {
        --bg-color: #4a4a4a;
        --text-color: #ffffff;

        --border-color: #ffffff;

        --details: #22a84a;
        --content: #ffffff;
        --content-text: #4a4a4a;
    }
`;

export default withTheme(GlobalStyles);