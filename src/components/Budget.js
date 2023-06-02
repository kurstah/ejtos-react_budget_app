import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySymbol = {
  dollar: '$',
  pound: '£',
  euro: '€',
  rupee: '₹'
};

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [currentBudget, setCurrentBudget] = useState(budget);

  useEffect(() => {
    setCurrentBudget(budget);
  }, [budget]);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value);
    if (newBudget < totalExpenses) {
      alert('You cannot reduce the budget value lower than the spending');
    } else {
      setCurrentBudget(newBudget);
    }
  };

  return (
    <div className='alert alert-secondary' style={{ width: '300px' }}>
      <label htmlFor='budget'>Budget: {CurrencySymbol[currency]}</label>
      <input
        required='required'
        type='number'
        id='budget'
        value={currentBudget}
        step='10'
        max='20000'
        style={{ size: 10 }}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;