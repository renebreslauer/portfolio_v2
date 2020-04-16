import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'
import './Contact.scss'

function Contact() {
  return (
    <ScrollableAnchor id={'Contact'}>
      <div className="header">
        <Parallax className="contact_container" x={[0, -500]}>
          <h1>Contact</h1>
        </Parallax>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact
