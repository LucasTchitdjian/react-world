import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to={"/"}
      exact="true">
        Accueil
      </NavLink>
      <NavLink to={"/about"}
      exact="true">
        About
      </NavLink>
    </div>
  );
};

export default Navigation;