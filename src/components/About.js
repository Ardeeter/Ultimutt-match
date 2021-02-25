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
            <div className="about-title">hello,</div>
            <div className="about-text">my name is Ally Deeter and this little cutie pie is Buddha. He is a 6 year old Husky Pit mix. I rescued him when he was 3 months old. As a puppy, he was picked up as a stray in Los Angeles and taken to a high kill shelter. He had mange, worms, and small wounds all over his body from living the first few months of his life out on the streets alone. Volunteers from a Santa Barbara dog rescue organization heard about him and took him back to their location. They spent a lot of time and energy to get him healthy again in hopes to find him a forever home. During this time, I was 23 years old and pondering the idea of getting a dog. My favorite hobby included spending hours on different dog adoption websites looking at dogs available. Until, the day I came across Buddha's picture. I went to the shelter immediately to meet him. As soon as they let him into the room to greet me, he broke free of the leash the employee had put on him and ran full speed right into my arms. That was game over. I knew this was my dog. </div>
          </div>
        </div>
      </>
    )
  }
}

export default About
