import React, { Component } from 'react';
import IndexView from './IndexView';
import TopTriggersView from './TopTriggersView';
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';

class ListContainer extends Component {
    constructor() {
        super()

        this.state = {
            activeComp: IndexView,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        const component = componentList[e.target.id]
        this.setState({
            activeComp: component
        })
    }

    componentDidMount() {
		this.props.getMeals();
		this.props.getSymptoms();
        this.props.getMostSymptomaticFoods();
    };
    
    render(){
        const { meals } = this.props.meals, 
            { symptoms } = this.props.symptoms,
            { mostSymptomaticFoods } = this.props.overviewQueries,
            { activeComp: ActiveComp } = this.state
        const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <div>
                { isMealLoaded && <ActiveComp meals={ meals } 
                    symptoms={ symptoms } 
                    mostSymptomaticFoods={ mostSymptomaticFoods }/> 
                }

                <div style={ OverviewDivStyle }>
                    <h2 id="IndexView" onClick={ this.handleClick }>All Meals</h2>
                </div>
                <div style={ OverviewDivStyle }>
                    <h2 id="TopTriggersView" onClick={ this.handleClick }>Top Triggers</h2>
                </div>
            </div>
        )
    };
}

ListContainer.defaultProps = {
    mostSymptomaticFoods: {},
    meals: [],
    symptoms: [],
}

const componentList = {
    IndexView,
    TopTriggersView
};

let OverviewDivStyle = {
    display: 'inline-block', 
    cursor: 'pointer', 
    width: '200px',
    border: 'solid black', 
    margin: '10px auto 0 auto'
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms,
        overviewQueries: state.overviewQueries
    })
}

export default connect(mapStateToProps, { 
    getMeals, 
    getSymptoms,
    getMostSymptomaticFoods
})(ListContainer)