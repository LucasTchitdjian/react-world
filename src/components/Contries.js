import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Contries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState('');
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

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
      <input
        type="range" 
        min="1" 
        max="250" 
        value={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <ul>
        {radios.map((radio) => {
          return (
            <li key={radio}>
              <input type="radio" value={radio} id={radio}
              checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
              <label htmlFor={radio}>{radio}</label>
            </li>
          );
        })}
      </ul>
    </div>
    <div className="cancel">
      {selectedRadio && (
        <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
        )}
    </div>
      <ul className='contries-list'>
        {sortedData
          .filter((contry) => contry.region.includes(selectedRadio))
          .map((contry) => (
          <Card contry={contry} key={contry.name.official} />
        ))}
      </ul>
    </div>
  );
};

export default Contries;