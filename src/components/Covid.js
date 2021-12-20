import React, { useEffect, useState } from 'react'
import './Covid.css';
const Covid = () => {

    const [data, setData] = useState([]);

    const  getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise);
            setData(actualData.statewise);
        }catch (err) {
            console.log(err);
        }
            
    }

    useEffect(() => {
      getCovidData();
    }, []);
    return (
        <>
          <h1>Live</h1> 
          <h2>Covid-19 CoronaVirus Tracker</h2>

          <div className="container-fluid mt-S">
              <div className="main-heading">
                  <h1 className="mb-S text-center"> <span className="font-weight-bold"> INDIA </span>COUNTRY</h1>
              </div>
              <div className="table-responsive">
                  <table className="table table-hover">
                      <thead className="thead-dark">
                          <tr>
                              <td> State </td>
                              <td> confirmed </td>
                              <td> recovered </td>
                              <td> deaths </td>
                              <td> active </td>
                              <td> updated </td>
                          </tr>
                      </thead>
                      <tbody>

                      {
                          data.map((curElem, ind) => {
                              return(
                          <tr key={ind}>
                              <td> {curElem.state} </td>
                              <td> {curElem.confirmed} </td>
                              <td> {curElem.recovered} </td>
                              <td> {curElem.deaths} </td>
                              <td> {curElem.active} </td>
                              <td> {curElem.lastupdatedtime} </td>
                          </tr>)
                          })
                      }
                      </tbody>
                  </table>
              </div>
          </div>
        </>
    )
}

export default Covid

