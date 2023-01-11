import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Currency:</span>
            <select name="currency" id="currency" value={currency}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyList;