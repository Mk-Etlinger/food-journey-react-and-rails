import React from 'react';
import MealForm from './MealForm';
import SymptomForm from './SymptomForm';
import DateDisplay from './DateDisplay';

export const Dashboard = () => {
    return (            
        <div style={{ marginTop: 100}}>
            <div>
                <MealForm />
                <SymptomForm />
            </div>
            <DateDisplay />
        </div>
    )
}