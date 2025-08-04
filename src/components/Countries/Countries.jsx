import { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {


    const [countries, setCountries] = useState([])

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

    return (
        <>
            <h3>Countries: {countries?.length}</h3>
            <div className='countries-container'>
                {
                    countries.map(country => <Country key={country.iso2} country={country} />)
                }
            </div>
        </>
    );
};

export default Countries;