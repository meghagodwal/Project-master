import React, { Component } from 'react';



class Homepage extends Component {
  render() {
    return (
      <div className="item1">
      <p id="opening">
       <h1>New generation of iPhone</h1>
      </p>
<p> Iphone 11 - -
Even faster speed, improved battery life. The iPhone 11's cameras get an excellent new Night Mode and an ultrawide-angle camera that can add extra detail in photos. Fantastic video camera.</p>
<a href="./blog1"><img src={require('./11.jpg')} width='200' height='170' alt=''/></a>
<p> Iphone 11 Pro - -
A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro. </p>
<a href="./blog1"><img src={require('./11pro.jpeg')} width='200' height='170' alt=''/></a>
<p>Iphone 11 Pro Max - - 
Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the 6.5-inch Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance. All in the first iPhone powerful enough to be called Pro</p>
<a href="./blog1"><img src={require('./11promax.jpg')} width='200' height='170' alt=''/></a>


      </div>
    );
  }
}

export default Homepage;
