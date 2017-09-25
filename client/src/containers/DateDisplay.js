import React from 'react';

// const data1 = {
//     date: {
//         breakfast: ["ham", "cheese"],
//         lunch: ["salad", "bacon"],
//         dinner: ["steak", "eggs"]
//     }
// }
// const meal = {
//     0: {
//         created_at: "Sept. 24th 2017",
//         meal_type: "breakfast",
//         ingredients: [{id: 1, name: "steak"}, {id: 2, name:"eggs"}],
//     }
// }

function DateDisplay() {
    const formatting = "  |  "
    return (
        <div>
            <h4>Sept. 24th</h4>
            <div>
                <button>B</button>
                <button>L</button>
                <button>D</button>
                <button>S</button>
                {formatting}
                <button>+</button>
                <button>+</button>
            </div>
            <h4>Sept. 26th</h4>
            <div>
                <button>B</button>
                <button>L</button>
                <button>D</button>
                <button>S</button>
                {formatting}
                <button>+</button>
                <button>+</button>
            </div>
        </div>
    )
}

export default DateDisplay;