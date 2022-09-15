import styled from 'styled-components';

const Container = styled.div`
    background: var(--box-shadow-color);
    box-shadow: var(--box-shadow);

    border-radius: 10px;

    margin-bottom: 40px;
`;

const Title = styled.h1`
    min-width: 320px;
    width: 320px;

    z-index: 10;

    color: var(--text-color);
    background-color: var(--bg-content);
    
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 300;
    
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding: 10px;
    margin-bottom: 3px;

    transition: color 0.3s, background-color 0.3s;
`;

const TimeBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 10px 1fr 10px 1fr;

    z-index: 10;

    width: 320px;
    min-width: 320px;

    color: var(--text-color);
    background-color: var(--bg-content);

    font-size: 40pt;
    
    padding: 10px 20px;
    
    margin-bottom: 3px;

    transition: color 0.3s, background-color 0.3s;
`;

const Time = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    height: 70px;
    line-height: 70px;

    letter-spacing: 5px;
`;

const Separator = styled.span`

`;

const ActionsBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;

    width: 100%;
    min-height: 56px;

    cursor: pointer;

    padding: 15px;

    border: none;
    font-size: 20pt;

    background-color: var(--bg-content);
    color: var(--text-color);

    transition: color 0.3s, background-color 0.3s;

    &:disabled {
        cursor: not-allowed;
        color: #8b8b8b;
    }

    &:active:not(:disabled) {
        transform: translate3d(4px, 4px, 10px);
    }

    &:hover:not(:disabled) {
        color: var(--details-color);
    }

    &:first-child {
        border-bottom-left-radius: 10px;

        &:active:not(:disabled) {
            transform: translate3d(1px, 2px, 10px);
        }
    }

    &:nth-child(2) {
        margin: 0 3px;

        &:active:not(:disabled) {
            transform: translate3d(0px, 2px, 10px);
        }
    }

    &:last-child {
        border-bottom-right-radius: 10px;

        &:active:not(:disabled) {
            transform: translate3d(-1px, 2px, 10px);
        }
    }
`;

const Midea = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
`;

const MideaLink = styled.a`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20pt;

    text-decoration: none;

    padding: 5px;

    color: var(--text-color);

    transition: color 0.3s;

    &:first-child {
        margin-right: 20px;
    }

    &:hover {
        color: var(--details-color);
    }
`;

export { Container, Title, TimeBox, Time, Separator, ActionsBox, Button, Midea, MideaLink };