import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  axios.get('https://restcountries.com/v3.1/all?fields=name;population;region;capital;flag;')
    .then((res) => setData(res.data));
  }, []);

  return (
    <div className="contries">
      <ul className='contries-list'>
        {data.map((contry) => (
          <li>{contry.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contries;