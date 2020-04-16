import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { useSpring, animated } from 'react-spring'
import './Intro.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Intro() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <ScrollableAnchor id={'Intro'}>
      <div className="intro">
        <div
          className="intro-spring_container"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className="intro-spring_background"
            style={{ transform: props.xy.interpolate(trans4) }}
          >
            <animated.div
              className="spring_text"
              style={{ transform: props.xy.interpolate(trans1) }}
            >
              <span className="spring_text--main">Rene</span>
              <span className="spring_text--sub">Breslauer</span>
            </animated.div>
          </animated.div>
        </div>
        <a href="#About">
          <div class="icon-scroll"></div>
        </a>
        <div className="nav_cover">
          <div className="nav">
            <a className="skills_link" href="#Skills">
              Skills
            </a>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Intro
