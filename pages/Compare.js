import React from 'react';
import black from './black.jpg';

const Compare = () => {
  
  return (
    <div className='com'>
    <h1>Compare Rhyno Vehicles</h1>
    <img src={black} className="App-logo" alt="black" style={{ width: '100%', height: 'auto',marginLeft:'0px' }}/> {/* Use imported image */}
    <div className='buttonse'>
      <button className='buttonse1'>Red</button>&nbsp;&nbsp;&nbsp;
      <button className='buttonse2'>Blue</button>&nbsp;&nbsp;&nbsp;
      <button className='buttonse3'>Green</button><b/>
    </div>
    <p><h2>Comparision table </h2> <b/>
    ○ You can think of other innovative ways to present this table <b/>
, Need to think how we can present it properly on mobile screen </p>
      <table border="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
 <thead>
          <tr>
            <th>Specification </th>
            <th>Rhyno SE03Lite</th>
            <th>Rhyno SE03</th>
            <th>Rhyno SE03 Max</th>
          </tr>
        <tr>
            <th>Battery</th>
            <td>1.8Kwh</td>
            <td>2.7Kwh </td>
            <td>2.7Kwh</td>
            
        </tr>
            <tr>
            <th>Battery features</th>
            <td>LFP with 1500 cycles Active Balancing Waterproof (IP67)</td>
                <td>LFP with 1500 cycles Active Balancing Waterproof (IP67)</td>
                <td>LFP with 1500 cycles Active Balancing Waterproof (IP67)
</td>
        </tr>
            <tr>
            <th>Battery warranty</th>
                <td>3 years</td>
                <td>3 Years </td>
                <td>3 Years </td>
            </tr>
            <tr>
            <th>Charging time</th>
             <td>3 hours (12A) </td>
                <td>4 hours (12A) </td>
                <td>4 hours (12A)
</td>
            </tr>
            <tr>
            <th>Motor</th>
            <td>1500W</td>
                <td>1500W</td>
                <td>2000W</td>
            </tr>
            <tr>
            <th>Max speed </th>
            <td>55 km/h </td>
            <td>55 km/h </td>
                <td>65 km/h</td>
            </tr>
 <tr>
            <th>Warranty on electronics</th>
            <td>1 year</td>
                <td>1 year</td>
            <td>1 year</td>
            </tr>
            <tr>
            <th>Max range (@30km/h)</th>
            <td>100 km</td>
            <td>150 km</td>
                <td>120 km</td>
            </tr>
            <tr>
            <th>Max range (@45km/h)</th>
            <td>90 km </td>
            <td>110 km</td>
            <td>100 km</td>
            </tr>
            <tr>
            <th>Max range (@full speed)</th>
            <td>60 km</td>
            <td>90 km </td>
            <td>80 km </td>
            </tr>
            <tr>
            <th>Other key benefits</th>
            <td>Fire-safe Battery Range prediction Comfortable ride Stable and safe</td>
            <td>Fire-safe battery Range prediction Comfortable ride Stable and safe</td>
            <td>Fire-safe battery Rangeprediction Comfortable ride Stable and safe</td>
            </tr>
        </thead>
      </table>

   </div>
  );
}

export default Compare;
