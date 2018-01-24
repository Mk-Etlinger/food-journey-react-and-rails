import React, { Component } from 'react';
import RelationView from './RelationView'
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';
import Box from 'grommet/components/Box';

class DataContainer extends Component {
    constructor() {
        super()

        this.state = {
            compActive: 'overview',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        this.setState({ compActive: e.target.id }) 
    }

    componentDidMount() {
		this.props.getMeals();
		this.props.getSymptoms();
        this.props.getMostSymptomaticFoods();
    };
    
    render(){
        const { meals } = this.props.meals, 
            { symptoms } = this.props.symptoms,
            { mostSymptomaticFoods } = this.props.overviewQueries
        const isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <Box flex
                pad='large'
                colorIndex='light-2'>
                { isSymptomLoaded && <RelationView symptomsIndex={ symptoms }/> }
            </Box>
        )
    };
}

DataContainer.defaultProps = {
    mostSymptomaticFoods: {},
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
})(DataContainer)