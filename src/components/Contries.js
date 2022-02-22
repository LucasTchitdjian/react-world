import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Contries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);

  useEffect(() => {
    if (playOnce) {

      axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setData(res.data);
        setPlayOnce(false);
      }); 
    }

    const sortedContry = () => {
      const contryObj = Object.keys(data).map((i) => data[i]); 
      const sortedArray = contryObj.sort((a,b) => {
        return b.population - a.population;
      });
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);
    };
    sortedContry();
  }, [data, rangeValue, playOnce]);

  return (
    <div className="contries">
    <div className="sort-container">
      <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => 
        setRangeValue(e.target.value)}/>
    </div>
      <ul className='contries-list'>
        {sortedData.map((contry) => (
          <Card contry={contry} key={contry.name.official} />
        ))}
      </ul>
    </div>
  );
};

export default Contries;