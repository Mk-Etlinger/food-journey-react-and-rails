import React from 'react';

export default ({ symptomsByDate }) => {    
    const mapDates = Object.keys(symptomsByDate).map((date, i) => {       
        let symptomsList = symptomsByDate[date].map(symptom => {
            return (            
                <div key={symptom.id}>                    
                    <p>{symptom.description + ': ' + symptom.ingredients.map(ing => ing.name)}</p>
                </div>
            )
        })        
        return (
            <div key={i}>
                <h3>{date}</h3>
                {symptomsList}
            </div> 
        )
    })
    return (
            <div>{mapDates}</div>
        )
}