import React from 'react';

import CTA from '../styled/CTA';
import { Accent, StyledTitle } from '../styled/Random';

export default function Home() {
        return (
                <div>
                    <StyledTitle>Ready to Type?</StyledTitle>
                    <CTA to="/game">Click or type <Accent>'s'</Accent>to start playing!</CTA>
                </div>
        );
}


