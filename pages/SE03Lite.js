import React from 'react';
import black from './black.jpg';
import {useNavigate} from 'react-router-dom';
const SE03Lite = () => {
    const navigate = useNavigate();
    const handleButton = () =>{
      navigate('/pre-book');
    };
  return(
  <div className='Aboutb'>
          <h1>Rhyno SE03Lite</h1>

    <img src={black} className="App-logo" alt="black" style={{ width: '100%', height: 'auto', }}/> {/* Use imported image */}
    <div className='buttonse'>
      <button className='buttonse1'>Red</button>&nbsp;&nbsp;&nbsp;
      <button className='buttonse2'>Blue</button>&nbsp;&nbsp;&nbsp;
      <button className='buttonse3'>Green</button>
    </div>
    <div>
      <h2>Overview</h2>
      <p>The Rhyno SE03 Lite is an innovative and eco-friendly vehicle...</p>
      <h2>Specifications</h2>
      <p>In the peIndulge perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride 1while still delivering an imstable pressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
</p><b /><b />
<h2 > Textual Details</h2>
<table border="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
 <thead>

          <tr>
             <th> Specification   </th>
           <b> <th>Rhyno SE030Lite</th></b>
           </tr>
           <tr>
            <th>Warranty on electronics </th>
            <td>---</td>
          </tr>
          <tr>

            <th>Battery</th>
            <td>1.8Kwh</td>
            
           </tr>
            <tr>
            <th>Max range (@30km/h)</th>
            <td>100 km</td>

           </tr>
            <tr>
            <th>Motor</th>
                <td>1500W</td>
            </tr>
            <tr>
            <th>Charging time</th>
             <td>3 hours (12A) </td>
               
            </tr>
            <tr>
            <th>Battery warranty</th>
            <td>3 years</td>
            </tr>
            <tr>
            <th>Max speed </th>
            <td>50 km/h </td>
            </tr>
            <tr>
            <th>Max range (@full speed)</th>
            <td>70 km</td>
            </tr>
            <tr>
            <th>Max range (@45km/h)</th>
            <td>90km</td>
            </tr>
            
        </thead>
      </table>

     </div><b />
   &nbsp; <button className='slitebuy' onClick={handleButton} >Buy Now</button>
  </div>
); 
}

export default SE03Lite;
