import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry }) => {
    console.log(country);
    const { country: name, cities, iso2, iso3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisisted = () => {
        setVisited(!visited);
    }


    return (
        <div className='country'
            style={{
                backgroundColor: visited ? 'lightgreen' : 'lightcoral',
                border: "none",
            }}>
            <button onClick={() => handleVisitedCountry(name)}>
                Mark Visited
            </button>
            <br />
            <button onClick={handleVisisted}
                style={{
                    backgroundColor: visited ? 'green' : 'red',
                    color: 'white',
                    border: 'none',
                }}>
                {visited ? "Visited" : "Going"}
            </button>
            {visited ? <p>I have visited this country!</p> : <p>I am going to visit this country!</p>}
            <h3>Name: {name}</h3>
            {
                cities.map(city => <h3>City: {city}</h3>)
            }
            <h3>ISO2: {iso2}</h3>
            <h3>ISO2: {iso3}</h3>
        </div>
    );
};

export default Country;