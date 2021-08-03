import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CTA = styled(Link)`
    font-size: 1.5rem;
    text-align: center;
    color: white;
    text-shadow: 2px 2px black;
    display: block;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;