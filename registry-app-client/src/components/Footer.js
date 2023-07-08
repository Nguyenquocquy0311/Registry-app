import React, { Component } from 'react';
import '../style/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h3>Company Name</h3>
        <p>Praesent sed lobortis mi. 
          Suspendisse vel placerat ligula. 
          Vivamus ac sem lacus. 
          Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
        </p>
        <p class="copyright">Company Name © 2023</p>
      </div>
    )
  }
}

export default Footer;
