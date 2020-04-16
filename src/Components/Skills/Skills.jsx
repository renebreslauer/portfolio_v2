import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import removeHash from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'
import './Skills.scss'

function Skills() {
  return (
    <ScrollableAnchor id={'Skills'}>
      <div className="skills_container">
        <Parallax className="skills_title" x={[0, 0]}>
          <h1>Skills</h1>
        </Parallax>
        <Parallax className="skills_div" x={[0, 0]}>
          <div className="skills_div"></div>
        </Parallax>
      </div>
    </ScrollableAnchor>
  )
}

export default Skills
