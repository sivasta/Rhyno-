// src/pages/Home.js
import React from 'react';
import black from './black.jpg'; // Adjust path as needed
import TextSwitcher from '../components/TextSwitcher'; // Adjust if necessary


const Home = () => {
  return (
    <div className='Homeb'>
      <h1 className='hom'>
        Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style.
      </h1>
      {/* Add more content here */}
      <div className='text'>
      <TextSwitcher />

      </div> 
      <img 
        src={black} 
        className="App-logo" 
        alt="black" 
        style={{ width: '100%', height: 'auto', marginLeft: '0px' }} 
      />
      <p className='homebt'>
        <b>1. LFP Battery :</b> Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
        renowned for their safety features—eliminating the risk of fire associated with other
        Lithium batteries. These batteries boast a broader temperature range, ideal for the
        diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
        by an Active Balancing Smart Battery Management System (BMS) for extended life
        and reduced maintenance. Each battery undergoes rigorous waterproofing tests
        according to IP76 standards. But it doesn't stop there—our technology goes the extra
        mile in ensuring the battery's lasting durability. Connect with us to discover the
        thoughtful engineering behind our batteries!
      </p>
      <p className='homebt'>
        <b>2. Wider tyres :</b> Now, say goodbye to skidding and embrace the leaning turns!
        Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
        beast that ensures stability on different terrains such as wet roads, mud, and sand.
      </p>
      <p className='homebt'>
        <b>3. Range prediction:</b> Many budget-friendly electric scooters overlook this crucial
        feature, causing riders to experience range anxiety. With Rhyno, you can ride with
        peace of mind, thanks to the scooter providing precise information about the
        remaining battery.
      </p>
      <p className='homebt'>
        <b>4. Extraordinery Experience:</b> Rhyno is more than just a mode of transportation. It is
        an experience of sheer comfort and style! A seamless fusion of minimalism,
        sophistication, and a touch of masculinity!
      </p>
      <p className='homebt'>
        <b>5. Rugged and simple Design:</b> We’ve had enough of the EVs looking and feeling like
        fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
        ending up spending weeks and months at service stations for complex repairs. We
        took a bold step of making something raw, rugged, and practical. We kept it so
        simple that even your trusted local mechanic can understand and repair most of it. If
        you have reached this far, why not to take a test ride? Click here to locate your
        nearest dealership or book a test ride at your home
      </p>
    </div>
  );
}

export default Home;
