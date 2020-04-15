import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'
import Intro_background from '../Assets/intro_background.svg'
import './Intro.scss'

function Intro() {
  return (
<ScrollableAnchor id={'Intro'}>
<div className="intro_container">
    <div className="header">
        <Parallax 
          className="header_title"
          y={[0, 500]}
          >
            <h1>Rene Breslauer</h1>
        </Parallax>
      </div>
</div>
</ScrollableAnchor>
  );
}

export default Intro;
