import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import fb from '../assets/facebook.png';
import twit from '../assets/twitter.png';

export class Footer extends Component {
  static displayName = Footer.name;



  render() {
    return (
      <div className='footer'>
        <div className='sb__footer section__padding'>
          <div className='sb__footer-links'>

            <div className='sb__footer-links_div'>
              <h4> For Business</h4>

              <a  href="/"> 
                <p>Employer</p>
              </a>

              <a  href="/"> 
                <p>Health Plan</p>
              </a>

              <a  href="/"> 
                <p>Individual</p>
              </a>
            </div>


            <div className='sb__footer-links_div'>
              <h4>Resources</h4>

              <a  href="/"> 
                <p>Resource center</p>
              </a>

              <a  href="/"> 
                <p>Testimonials</p>
              </a>
            </div>

            <div className='sb__footer-links_div'>
              <h4>Partners</h4>

              <a  href="/"> 
                <p>OrganicFood</p>
              </a>
            </div>

            <div className='sb__footer-links_div'>
              <h4>Company</h4>

              <a  href="/"> 
                <p>About</p>
                
              </a>             
              <a  href="/"> 
                <p>Career</p>
              </a>
              
            </div>

            <div className='sb__footer-links_div'>
              <h4>Contact us</h4>
              <div className='socialmedia'>
                <p><img src={fb} alt=''/></p>
                <p><img src={twit} alt=''/></p>
              </div>
            </div>
          </div>

        <hr></hr>

        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} Dovydo pica. All right reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href="/">
              <div>
                <p>
                  Terms and Conditions
                </p>
              </div>
            </a>

            <a href="/">
              <div>
                <p>
                  Privacy
                </p>
              </div>
            </a>
          </div>
        </div>

        </div>
      </div>
    );
  }
}
