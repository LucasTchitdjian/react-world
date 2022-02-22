import React from 'react';

const Card = (props) => {
  const { contry }  = props;
  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <li className='card'>
      <img src={contry.flags.png} alt="flag" />
      <div className="data-container">
        <ul>
          <li>{contry.name.official}</li>
          <li>{contry.capital}</li>
          <li>{numberFormat(contry.population)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;