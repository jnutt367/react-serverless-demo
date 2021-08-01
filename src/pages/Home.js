import React from 'react';
import { Accent } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle } from '../styled/Random';
export default function Home() {
    return (
        <div>
            <StyledTitle>GET YOUR TYPE ON!!</StyledTitle>
            <CTA to="/game">
                Click or Type '<Accent>s</Accent>' to start playing
            </CTA>
        </div>
    );
}

