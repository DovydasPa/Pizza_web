import React, { Component } from 'react';
import p1 from '../assets/pizza1.jpg';
import dt from '../assets/delivery-truck.png';
import or from '../assets/organic.jpg';
import piz from '../assets/pizza.png';
import './Home.css';
import Atsiliepimai from './Atsiliepimai';



export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (

      
      <div className='home'>

        <div className='welcome'>
          <h3 className='welcome-text'>Papa's pizzeria</h3>
        </div>


        <div className='container-home'>
        <div className='container-home-vidus'>

        <div className='section1'>
        <h1>Hello, world!</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <ul>
          <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
          <li>Lorem Ipsum has been the industry's </li>
          <li>Lorem Ipsum has been the industry's standard dummy </li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
       
        </div>


        <div className='section2'>
          <div className='pizza1'>
            <img src={p1} alt=''/>
          </div>

          <div className='istorija'>
          <p className='text-danger fs-3'>Lorem Ipsum is simply</p>
          <p className='fw-bold fs-2 '>Serving pizzas since 1996</p>
          <p className='lh-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className='btn-center'>
            <button className='btn-menu-home px-1 py-3'>Check our menu</button>
          </div>
          </div>
        </div>


        </div>
        </div>

        <div className='skills'>
          

          
          <div className='skills-bot'><img className='skill-photos' src={or}/> <h3 className='skill-text'>Organic food</h3></div>
          <div className='skills-bot'><img className='skill-photos' src={dt}/> <h3 className='skill-text'>Fast delivery</h3></div>
          <div className='skills-bot'><img className='skill-photos' src={piz}/> <h3 className='skill-text'>Original taste</h3></div>

          
          
        </div>

      </div>
      
    );
  }
}
