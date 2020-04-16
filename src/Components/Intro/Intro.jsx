import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'
import Intro_background from '../Assets/intro_background.svg'
import { useSpring, animated } from 'react-spring'
import './Intro.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Intro() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
<ScrollableAnchor id={'Intro'}>
<div className="container">
<div className="spring_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="header_title" style={{ transform: props.xy.interpolate(trans1) }}>
          <h1>Rene Breslauer</h1>
      </animated.div>
      <animated.div className="intro_background_image" style={{ transform: props.xy.interpolate(trans4) }}>
        <img src={Intro_background} className="intro_background_image" />

        </animated.div>
    </div>
</div>
</ScrollableAnchor>
  );
}

export default Intro;
