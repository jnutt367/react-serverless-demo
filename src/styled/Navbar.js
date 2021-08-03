import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledNavbar = styled.nav `
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: aliceblue;
    border: 4px inset brown;
    opacity: 0.8;
    box-shadow: 3px 3px 10px black;
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
    text-decoration: none;
`;


export const StyledLink = styled(Link)
`
    text-decoration: none;
    color: white;
    text-shadow: 2px 2px black;
    padding: 10px;
    font-size: 1.5rem;

    transition: color 300ms;
    &:hover {
        color: #e16365;
    }
`;

export const Accent = styled.span `
    color: #e16365;
`;