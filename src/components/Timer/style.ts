import styled from 'styled-components';

const Container = styled.div`

`;

const Title = styled.h1`
    color: var(--content-text);
    background-color: var(--content);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    transition: all 0.3s;

    min-width: 320px;
    width: 320px;

    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 300;

    padding: 10px;

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    margin-bottom: 3px;
`;

const TimeBox = styled.div`
    color: var(--content-text);
    background-color: var(--content);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    transition: all 0.3s;

    min-width: 320px;
    width: 320px;

    display: grid;
    grid-template-columns: 1fr 10px 1fr 10px 1fr;

    font-size: 40pt;
    font-weight: 200;

    padding: 10px 20px;

    margin-bottom: 3px;
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

    margin-bottom: 40px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 56px;
    cursor: pointer;

    padding: 15px;

    border: none;
    font-size: 20pt;

    background-color: var(--content);
    color: var(--details);

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);

    transition: all ease 0.3s;

    &:disabled {
        cursor: not-allowed;
        color: #8b8b8b;
    }

    &:active:not(:disabled) {
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
        transform: translateY(4px);
    }

    &:hover {
        background-color: var(--content);
    }

    &:nth-child(2) {
        margin: 0 3px;
    }

    &:first-child {
        border-bottom-left-radius: 10px;
    }

    &:last-child {
        border-bottom-right-radius: 10px;
    }
`;

const Midea = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
`;

const MideaLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20pt;

    text-decoration: none;

    padding: 5px;

    color: var(--details);
    border: 1px solid transparent;

    border-radius: 5px;

    transition: all 0.3s;
`;

export { Container, Title, TimeBox, Time, Separator, ActionsBox, Button, Midea, MideaLink };