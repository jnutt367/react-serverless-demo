import React from 'react';
import { Accent, Strong } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle } from '../styled/Random';
export default function Home() {
    return (
        <div>
            <StyledTitle>Get Your TYPE on!</StyledTitle>
            <CTA to="/game">
                Click or Type '<Accent>s</Accent>' to start playing
            </CTA>
            <Strong>
                Type the letter on the screen, hurry! You only have 5 seconds!
            </Strong>
        </div>
    );
}

