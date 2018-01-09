import React from 'react';
import Map from 'grommet/components/Map';

export default ({ symptomsIndex }) => {

    let symptoms = symptomsIndex.map(symptom => {
        return {"id": `symp-${symptom.id}`, "label": `${symptom.description}`}
    })
    
    let filterItems = [];
    let triggers = symptomsIndex.map(symptom => {
        let ingredientsArray = symptom.ingredients.map(ingredient => {
            if (filterItems.indexOf(ingredient.id) === -1) {
                filterItems.push(ingredient.id)
                return {"id": `ing-${ingredient.id}`, "label": `${ingredient.name}`}
            } 
        })
        return ingredientsArray
    })

    let links = symptomsIndex.map(symptom => {
        let reactionsArray = symptom.reactions.map(reaction => {
            return {"parentId": `symp-${reaction.symptom_id}`, "childId": `ing-${reaction.ingredient_id}`}
        })
        return reactionsArray
    })

    let mergedLinks = [].concat.apply([], links),
        mergedSymptoms = [].concat.apply([], symptoms),
        mergedTriggers = [].concat.apply([], triggers),
        uniqueTriggers = mergedTriggers.filter(trigger => {
        return trigger !== undefined
    })
    
    return (
        <div style={{ width: '60%', border: 'solid grey', margin: '0 auto 0 auto' }}>
            <Map vertical data={{
                "categories": [
                    {
                    "id": "symptoms-map",
                    "label": "Symptoms",
                    "items": mergedSymptoms
                    },
                    {
                    "id": "triggers-map",
                    "label": "Triggers",
                    "items": uniqueTriggers
                    }
                ],
                "links": mergedLinks
            }} />
        </div>

    )
}