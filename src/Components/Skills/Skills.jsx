import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'
import style from './Skills.scss'

function Skills() {
  return (
<ScrollableAnchor id={'Skills'}>
<div className="skills_container">
    <div className="skills">
    <Parallax 
          className={style.header_title}
          offsetYMax={70}
          offsetYMin={-70}
          offsetXMax={-30}
          offsetXMin={30}
          >
            <h1>Skills</h1>
    </Parallax>
        </div>
    </div>

</ScrollableAnchor>
  );
}

export default Skills;
