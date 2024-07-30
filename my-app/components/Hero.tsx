import React from 'react';
import LandingPage from './LandingPage';
import Camp from './Camp';
import Guide from './Guide';

const Hero = () => {
    return (
        <div className='relative overflow-hidden'>
             <LandingPage /> 
              <Camp />
             <Guide />
             {/*<Features />
             <Getapp /> */}
        </div>
    );
};

export default Hero;