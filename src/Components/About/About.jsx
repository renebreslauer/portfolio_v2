import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'
import './About.scss'

function About() {
  return (
    <ScrollableAnchor id={'About'}>
      <div className="about_container">
        <div className="header">
          <Parallax className="header_title" x={[-100, 90]}>
            <h1>About</h1>
          </Parallax>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default About
