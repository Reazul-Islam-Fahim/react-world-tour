import { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://countriesnow.space/api/v0.1/countries')
                const data = await response.json()
                console.log(data)
                setCountries(data?.data)
            } catch (error) {
                console.error('Error fetching countries:', error)
            }
        }

        fetchCountries()
    }, [])

    const handleVisitedCountry = (country) => {
        setVisitedCountries(prev => [...prev, country]);
        console.log('Visited country:', country);
    }

    return (
        <>
            <h3>Countries: {countries?.length}</h3>
            <div>
                <h5>
                    Visited Countries: {visitedCountries.length}
                </h5>
                <ul>
                    {
                        visitedCountries?.map((country) => <li key={country.iso2}>{country}</li>)
                    }
                </ul>
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country key={country.iso2} country={country} handleVisitedCountry = {handleVisitedCountry}/>)
                }
            </div>
        </>
    );
};

export default Countries;