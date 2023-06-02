import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (youKnow) => {

    return (
   
      <div>
   <label> Currency </label>
        <select id='verde' className="custom-select">
   
          <option value="dollar">$ Dollar</option>
   
          <option value="pound">£ Pound</option>
   
          <option value="euro">€ Euro</option>

          <option value="ruppee">₹ Ruppee</option>
        </select>

      </div>
   
    );
   
   };
   
   export default Currency;