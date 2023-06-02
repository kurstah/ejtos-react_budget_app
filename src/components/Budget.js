import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [currentBudget, setCurrentBudget] = useState(budget);


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
    <div className='alert alert-secondary'>

      <input
        required='required'
        type='number'
        id='budget'
        defaultValue={currentBudget}
        step='10'
        max='20000'
        style={{ marginLeft: '2rem', size: 10 }}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;