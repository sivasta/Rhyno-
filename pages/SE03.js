import React from 'react';
import bikeblue from './bikeblue.png';
import {useNavigate} from 'react-router-dom';

const SE03 = () => {
  const navigate = useNavigate();
    const handleButton = () =>{
      navigate('/pre-book');
    };

  return(
  <div className='Aboutb'>
    <h1> Rhyno SE03</h1>
    <img src={bikeblue} className="App-logo" alt="black" style={{ width: '100%',height: 'auto' }}/> {/* Use imported image */}
     <div className='buttonse'>
      <button className='buttonse1'>Red</button>&nbsp;&nbsp;&nbsp;
      <button className='buttonse2'>Blue</button>&nbsp;&nbsp;&nbsp;
      <button className='buttonse3'>Green</button>
    </div>
    <div>
      <h2>Overview</h2>
      <p>Indulge in the perfect harmony of power and range
         with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering
          an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery,
           along with the comprehensive benefits of owning a Rhino.
           Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at 
        every turn. Check out the other details below!</p>
      <b /><h2 > Textual Details</h2>
<table border="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
 <thead>
 <tr>
            <th> Specification</th>
          <b>  <td> Rhyno SE03</td></b>
          </tr>
          <tr>
            <th>Battery </th>
            <td>2.7Kwh</td>
          </tr>
          <tr>

            <th>Battery features</th>
            <td>LFP with 1500 cycles Active Balancing Waterproof (IP67)</td>
            
           </tr>
            <tr>
            <th>Battery warranty </th>
            <td>3 years</td>

           </tr>
            <tr>
            <th>Charging time </th>
                <td>4 hours (12A)
                </td>
            </tr>
            <tr>
            <th>Charging time</th>
             <td>3 hours (12A) </td>
               
            </tr>
            <tr>
            <th>Motor</th>
            <td>1500W</td>
            </tr>
            <tr>
            <th>Max speed </th>
            <td>55 km/h </td>
            </tr>
            <tr>
            <th>Max range (@30km/h)</th>
            <td>150 km</td>
            </tr>
            <tr>
            <th>Max range (@45km/h)</th>
            <td>110 km</td>
            </tr>
            <tr>
            <th>Warranty on electronics  </th>
            <td>1 year</td>
            </tr>
            
        </thead>
      </table>

     </div><b />
    
    <button className='slitebuy' onClick={handleButton}>Buy Now</button>
  </div>
);
}
export default SE03;
