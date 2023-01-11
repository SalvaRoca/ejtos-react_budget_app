import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = () => {
        if (budget > 20000) {
            alert(`Budget cannot exceed ${currency}20000`);
        }

        if (budget < totalExpenses) {
            alert(`The value cannot be lower than the already allocated budget ${currency}${totalExpenses}`);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                placeholder='Budget'
                value={budget}
                min='0'
                onChange = {setBudget()}
            >
            </input>
        </div>
    );
};

export default Budget;
