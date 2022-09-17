import styled from 'styled-components';

const Container = styled.div`
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

export { Container, Time, Separator };