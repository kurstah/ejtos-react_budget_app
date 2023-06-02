import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
  };

  return (
    <div>
      <label>Currency</label>
      <select className="custom-select" onChange={handleCurrencyChange}>
        <option value="dollar">$ Dollar</option>
        <option value="pound">£ Pound</option>
        <option value="euro">€ Euro</option>
        <option value="rupee">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;