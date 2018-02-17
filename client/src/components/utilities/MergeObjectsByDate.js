export const mergeObjectsByDate = (meals = {}, symptoms = {}) => {
    let mergedObject = {};
    let allDateKeys = [...new Set(Object.keys(symptoms).concat(Object.keys(meals)))]
    
    allDateKeys.sort( (a, b) => {
        let dateA = new Date(a), dateB = new Date(b)
        return dateB - dateA
    })
    
    allDateKeys.forEach( (date, i) => {
        mergedObject[date] = mergedObject[date] || { meals: [], symptoms: [] }
        
        if (symptoms[date] && meals[date]) {
            mergedObject[date].meals = meals[date]
            mergedObject[date].symptoms = symptoms[date]
        } else if (meals[date]) {
            mergedObject[date].meals = meals[date]
        } else if (symptoms[date]) {
            mergedObject[date].symptoms = symptoms[date]
        }
    })
    return mergedObject
}

export function mergeUnique(arr1, arr2){
    return arr1.concat(arr2.filter(function (item) {
        return arr1.indexOf(item) === -1;
    }));
}