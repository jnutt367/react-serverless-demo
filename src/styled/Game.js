import styled from "styled-components";

export const StyledGame = styled.div `
    height: 75vh;
    background-color: black;
    border-radius: 15px;
    max-height: 500px;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const StyledScore = styled.p `
    font-size: 1.5rem;
    color: white;
    padding-left: 20px;
`;

export const StyledTimer = styled.p `
    font-size: 1.5rem;
    grid-column: 3;
    color: white;
    padding-right: 20px;
`;

export const StyledCharacter = styled.p `
    font-size: 15rem;
    display: grid;
    grid-row: 2;
    grid-column: 1/4;
    text-align: center;
    color: #e16356;
    position: relative;
    top: -100px;
`;