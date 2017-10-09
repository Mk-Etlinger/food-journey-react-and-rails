import React from 'react';

export default ({ symptomsByDate }) => {    
    const mapSymptomDates = Object.keys(symptomsByDate).map((date, i) => {       
        let symptomsList = symptomsByDate[date].map(symptom => {
            return (            
                <div key={symptom.id}>                    
                    <p>{symptom.description}</p>
                    <p>Potential Triggers:</p>
                    <ul>
                        {symptom.ingredients.map(ing => <li key={ing.id}>{ing.name}</li>)}
                    </ul>
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
            <div>{mapSymptomDates}</div>
        )
}