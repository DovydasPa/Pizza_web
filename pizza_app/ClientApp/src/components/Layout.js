import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        
        
        <div className='kontikas'>

          <NavMenu />

         
          {/* <Container className='container-up'> */}
          <div className='container-up'>
          {this.props.children}
          
          {/* </Container> */}
          </div>

          <Footer/>
        </div>

        
      </div>
    );
  }
}
