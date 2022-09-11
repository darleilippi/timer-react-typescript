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

    background-color: transparent;
    border: 1px solid var(--details);

    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.5);

    transition: all ease 0.3s;

    &.active {
        cursor: not-allowed;
    }

    &:not(.active):active {
        transform: translateY(2px);

        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    }

    &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;

        &:not(.active) {
            border-right: none;
        }
    }

    &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

        &:not(.active) {
            border-left: none;
        }
    }
`;

const ButtonLight = styled(Button)`
    background-color: #ffffff;
    color: #000000;
`;

const ButtonDark = styled(Button)`
    background-color: #000000;
    color: #ffffff;
`;

export { Container, ButtonLight, ButtonDark };