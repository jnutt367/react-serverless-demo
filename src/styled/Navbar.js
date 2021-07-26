import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledNavbar = styled.nav `
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: aliceblue;
    border: 2px solid blue;
    opacity: 0.8;
    box-shadow: 3px 3px blue;
    border-radius: 15px;
    padding: 20px;
`;

export const StyledNavBrand = styled.div `
    font-size: 1.4rem;

    & > a {
        text-decoration: none;
    }
`;

export const StyledNavItems = styled.ul `
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 22px;
`;


export const StyledLink = styled(Link)
`
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 300ms;
    &:hover {
        color: #e16365;
    }
`;

export const Accent = styled.span `
    color: #e16365;
`;