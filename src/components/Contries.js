import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Contries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  axios.get('https://restcountries.com/v3.1/all')
    .then((res) => setData(res.data));
  }, []);

  return (
    <div className="contries">
      <ul className='contries-list'>
        {data.map((contry) => (
          <Card contry={contry} key={contry.name.official} />
        ))}
      </ul>
    </div>
  );
};

export default Contries;