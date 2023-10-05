import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import pl from '../assets/pizza-logo.png';
import cart from '../assets/cart.png';
import ph from '../assets/phone.png';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className='navbar-visas'>

      <div className='nav-up'>
       <div className='logo'> <img src={ph} alt='logo'/> </div> 
      <div className='logo1'><img src={pl} alt='logo'/></div>
      <div className='logo2'><img src={cart} alt='logo'/></div>
      </div>

        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow " container light>
          {/* <NavbarBrand className='ipagrindini' tag={Link} to="/">pizza_app</NavbarBrand> */}
          <NavbarToggler onClick={this.toggleNavbar} className="Toggler mr-2" />
          {/* flex-sm-row-reverse */}
          <Collapse className="d-sm-inline-flex flex-sm-row justify-content-center" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem className='linkai'>
                <NavLink tag={Link} className="linkas"  to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="linkas"  to="/restoranai">Restoranai</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="linkas"  to="/Nuopelnai">Nuopelnai</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="linkas"  to="/menu">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="linkas"  to="/atsiliepimai">Atsiliepimai</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
