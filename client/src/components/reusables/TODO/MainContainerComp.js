import React, { Component } from 'react';
import IndexView from './IndexView';
import GrommetTable from '../reusables/GrommetTable';
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';

class MainContentContainer extends Component {
    constructor() {
        super()

        this.state = {
            activeComp: 'tableView',
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
            { compActive } = this.state
        const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <div>
            { isMealLoaded && <IndexView meals={ meals } symptoms={ symptoms }/> }
             <div style={ OverviewDivStyle }>
                    <h2 id="overview" onClick={ this.handleClick }>All Meals</h2>
                </div>
                <div style={ OverviewDivStyle }>
                    <h2 id="tableView" onClick={ this.handleClick }>Top Triggers</h2>
                </div>
            </div>
        )
    };
}

MainContentContainer.defaultProps = {
    mostSymptomaticFoods: {},
}

// const componentList = {
//   AddItem,
//   MainContentContainer,
//   DataContainer,
//   RelationContainer
// };

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
})(MainContentContainer)