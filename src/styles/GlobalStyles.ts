import { createGlobalStyle } from 'styled-components';

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
        flex-direction: column;

        height: 100%;
        width: 100%;

        color: var(--text-color);
        background-color: var(--bg-color);

        transition: color 0.3s, background-color 0.3s;
    }

    .app.light {
        --bg-color: #dfdfdf;
        --text-color: #484848;

        --details-color: #22a84a;
        --bg-content: #efefef;

        --box-shadow-color: rgba(0, 0, 0, 0.4);
        --box-shadow: 0px 5px 10px 0px var(--box-shadow-color);
    }

    .app.dark {
        --bg-color: #4a4a4a;
        --text-color: #e9e9e9;

        --details-color: #22a84a;
        --bg-content: #383838;

        --box-shadow-color: rgba(0, 0, 0, 0.8);
        --box-shadow: 0px 5px 10px 0px var(--box-shadow-color);
    }
`;

export default GlobalStyles;