import React, { useState, useEffect } from "react"
import Section1 from './components/Section1'
import Section2 from './components/SearchPage'

const App = () => {
  const [Covid19data, setCovid19data] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      return await fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => {
          setCovid19data(data)
        });
    }
    fetchData();
  }, []);
  return (

    <div className="wrapper">
      <div className="section">
        {Covid19data !== [] && <Section1 Covid19data={Covid19data} />}

      </div>
      <div className="section  ">
        {Covid19data !== [] && <Section2 Covid19data={Covid19data.Countries} />}

      </div>
      <div className='text-scroll-1' >Scroll or Tab </div>
      <div className='text-scroll-2 ' >More Details </div>
      <div className='icon-scroll' />


    </div>

  );
}

export default App;
