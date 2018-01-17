import React, { Component } from 'react';
import DataView from './DataView'
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';

class DataContainer extends Component {
    constructor() {
        super()

        this.state = {
            compActive: 'overview',
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
                { isMostSymptomaticFoodsLoaded && 
                    <DataView mostSymptomaticFoods={mostSymptomaticFoods}/> }
            </div>
        )
    };
}

DataContainer.defaultProps = {
    mostSymptomaticFoods: {},
}
const componentList = {
};

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
})(DataContainer)