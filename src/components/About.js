import React, { Component } from 'react'

class About extends Component {

  constructor() {
    super()
    
  }

  render() {
    return (
      <>
        <div className="about-container d-flex row m-5">
          <div className="col-5 justify-content-center about-img-box p-3 align-items-center">
            <img src="./images/about.jpg" alt="" className="about-img"/>
          </div>
          <div className="about-title col-7 px-3">
            <div className="about-title">hello,</div><div className="about-text"></div>
          </div>
        </div>
      </>
    )
  }
}

export default About
