import React from 'react';

export default class Mealcard extends React.Component {
    constructor(){
        super();

        this.state = {
            likeCount: 0,
        }
    }

    handleClick = () => this.setState({ likeCount: this.state.likeCount + 1 })

    render() {
        const { meal } = this.props
        
        return (
            <div>                    
                <p>{meal.meal_type + ': ' + meal.ingredients.map(ing => ing.name)}</p> 
                <button onClick={this.handleClick}>Like</button>
                <button onClick={this.callApi}>Call Api</button>
                {this.state.likeCount}
            </div>    
        )
    }
}
