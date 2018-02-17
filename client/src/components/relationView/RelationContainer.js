import React, { Component } from 'react';
import RelationView from './RelationView'
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

class DataContainer extends Component {
   

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
            <Box margin={{ top: 'small' }}>
                <Heading tag='h2'>Symptoms and Possible Triggers</Heading>
                <Box direction='row'
                    size={{ width: 'xxlarge', height: 'large' }}
                    alignSelf='center'
                    margin='small'>
                <Box className='borderBoxShadowSmall'
                    flex
                    basis='large'
                    colorIndex='light-1'>
                    { isSymptomLoaded && <RelationView symptomsIndex={ symptoms }/> }
                </Box>
                </Box>
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