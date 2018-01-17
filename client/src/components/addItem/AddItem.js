import React from 'react';
import MealForm from './MealForm';
import SymptomForm from './SymptomForm';
import DateDisplay from './DateDisplay';

export const AddItem = () => {
    return (            
        <div style={{width:'60%' }}>
            <MealForm />
            <SymptomForm />
            
            <DateDisplay />
        </div>
    )
}