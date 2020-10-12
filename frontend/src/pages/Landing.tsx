import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/happy-logo.svg';

function Landing() {
    return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={ logoImg } alt="Happy Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>

          <div className="location">
              <strong>São Paulo</strong>
              <span>São Paulo</span>
          </div>

          <Link to="/app" className="enter-app">
              <FiArrowDownRight 
              size={26} 
              color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </main>
      </div>
    </div>
    );
}

export default Landing;