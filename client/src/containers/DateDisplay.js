import React from 'react';
import DateDropdown from '../components/DateDropdown'

function DateDisplay({ meals, symptoms }) {
    const mapDates = Object.keys(meals).map((date, i) => {
        if (symptoms[date]) {
            return <DateDropdown key={i} date={date} symptoms={symptoms[date]} meals={meals[date]}/>
        }
        return <DateDropdown key={i} date={date} symptoms={[]} meals={meals[date]}/>
    }) 
    
    return (
        <div>
            {mapDates}
        </div>
    )
}

export default DateDisplay;