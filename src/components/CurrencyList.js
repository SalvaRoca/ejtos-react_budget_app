import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Currency: {currency}</span>
        </div>
    );
};

export default CurrencyList;