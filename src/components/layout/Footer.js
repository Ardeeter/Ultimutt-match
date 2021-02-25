import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <div className="ft-con fixed-bottom">
        <div className="footer-bar"></div>
        <div className="footer-container border border-dark justify-content-center align-items-center">

          <div className="footer-text-quote text-center m-2">“A person who has never owned a dog has missed a wonderful part of life.” ― Bob Barker</div>
          <div className="footer-text-logo text-center">Ultimutt Match, Inc. © 2021</div>
        </div>
      </div>
    </>
  )
}

export default Footer
