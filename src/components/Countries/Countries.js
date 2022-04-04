import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h3>Country related information in short</h3>
            <h5>Countries number : {countries.length}</h5>
            <ul>
                {
                    countries.map(country => <li><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Countries;