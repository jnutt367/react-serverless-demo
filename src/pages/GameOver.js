import React from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledScore } from '../styled/Game';
import { StyledLink } from '../styled/Navbar';
import { StyledTitle } from '../styled/Random'
export default function GameOver({ history }) {
    const [score] = useScore();

    if (score === -1) {
        history.push('/');
    }
    return (
        <div>
            <StyledTitle>Game Over</StyledTitle>
            <StyledScore>{score}</StyledScore>
            <StyledLink to="/">Go Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </div>
    );
}
