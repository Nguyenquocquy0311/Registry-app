import React, { Component } from 'react';
import '../../style/Home.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <div className='home-page'>
          <div className="content">
            <h1>Web Design &<br></br> <span>Development</span> <br></br>Course</h1>
            <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque 
                expedita atque eveniet <br></br> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus 
                <br></br>a quae totam ipsa illum minus laudantium?</p>
            <button className="cn"><a href="/contact">JOIN US</a></button>
          </div>
          <div className='img'></div>
        </div>
      </div>
    )
  }
}

export default Home;