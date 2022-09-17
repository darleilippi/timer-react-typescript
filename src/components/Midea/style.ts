import styled from 'styled-components';

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

export { Midea, MideaLink };