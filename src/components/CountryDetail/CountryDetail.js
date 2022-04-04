import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    return (
        <div>
            <h3>Country detail for : {countryName}</h3>
        </div>
    );
};

export default CountryDetail;