const groupByDates = (meals = [], symptoms = []) => {
//     // let tableFormat = {
//     //     date: 
//     //         { meals: [{id: 1, meal_type: 'snack'}],
//     //         symptoms: [{id: 1, description: 'headache'}] }
//     // }

    let symptomsByDate = {}, mealsByDate = {}, combinedForTable = {};
        symptoms.forEach(symptom => {
            let date = moment(symptom.created_at).format('MMM Do')
            let symptomsArray = symptomsByDate[date] || []
            
            symptomsByDate[date] = [...symptomsArray, symptom]
        });
        meals.forEach(meal => {
            let date = moment(meal.created_at).format('MMM Do')
            let mealsArray = mealsByDate[date] || []
            
            mealsByDate[date] = [...mealsArray, meal]
        });

        Object.keys(mealsByDate).forEach((date, i) => {
            combinedForTable[date] = combinedForTable[date] || { meals: [], symptoms: [] }
            
            if (symptomsByDate[date]) {
                combinedForTable[date].meals = [...mealsByDate[date]]
                combinedForTable[date].symptoms = [...symptomsByDate[date]]
            } else {
                combinedForTable[date].meals = [...mealsByDate[date]]
            }
        })

        return combinedForTable
}