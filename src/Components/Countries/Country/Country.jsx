import { useEffect, useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    // console.log(handleVisitedCountries)

    // const passCountry = () => handleVisitedCountries(country)
    
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
           <h3 style={{color: visited ? 'black' : 'white'}}>Name: {name?.common}</h3>
           <img src={flags?.png} alt=""  /> 
           <p>Population: {population}</p>
           <p>Area: {area}</p>
           <p>Code: {cca3}</p>
           <button onClick={() => handleVisitedCountries(country)} style={{marginBottom:"8px"}}>Mark Visited</button>
           <br />
           <button onClick={() => handleVisitedFlags(country.flags.png)}>add flag</button>
           <br />
           <button onClick={handleVisited}>{visited ? 'Visited' :  'Going'}</button>
           {visited ? 'Visited' :  ' not Visited'}
           <hr />
           
        </div>
    );
};

export default Country;