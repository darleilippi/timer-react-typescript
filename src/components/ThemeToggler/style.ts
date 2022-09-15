import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    padding: 5px 10px;
    min-height: 24px;
    min-width: 34px;

    font-size: 9pt;

    color: var(--bg-color);
    background-color: var(--text-color);
    border: 1px solid var(--text-color);
    border-radius: 3px;

    transition: color 0.1s, background-color 0.3s, transform 0.2s, display 0.5s;
`;

export { Container, Button };