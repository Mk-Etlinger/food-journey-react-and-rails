import React, { Component } from 'react';
import DataView from './DataView'
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';

class DataContainer extends Component {
    constructor() {
        super()

        this.state = {
            ActiveComp: DataView,
            activeIndex: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        const component = componentList[e]
        this.setState({
            ActiveComp: component,
            activeIndex: e
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
            { ActiveComp } = this.state
        const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <Box flex
                align='center'>
                <Box size={{ width: 'xxlarge', height: 'large'}}
                    colorIndex='light-2'>
                    <Tabs
                        activeIndex={ this.state.activeIndex } 
                        onActive={ this.handleClick }>
                        <Tab id='IndexView' title='Top Triggers'>
                            { isMostSymptomaticFoodsLoaded && <ActiveComp 
                                mostSymptomaticFoods={ mostSymptomaticFoods }/> 
                            }
                        </Tab>
                    </Tabs>
                </Box>
            </Box>
        )
    };
}

DataContainer.defaultProps = {
    mostSymptomaticFoods: {},
}
const componentList = [
    DataView
];

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