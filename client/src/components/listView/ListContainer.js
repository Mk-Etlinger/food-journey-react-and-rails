import React, { Component } from 'react';
import IndexView from './IndexView';
import TopTriggersView from './TopTriggersView';
import ListSubPageView from './ListSubPageView';
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

class ListContainer extends Component {
    constructor() {
        super()

        this.state = {
            activeComp: IndexView,
            activeIndex: 0
        }
    }

    handleOnActive = (e) => {
        const component = componentList[e]
        this.setState({
            activeComp: component,
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
            { activeComp: ActiveComp, activeIndex } = this.state

        return (
            <Box flex
                align='center'
                margin='small'
                colorIndex='light-2'>
                <Box style={{ marginRight: '10em' }}
                    alignSelf='center'>
                    <Heading strong>
                        Entries
                    </Heading>
                </Box>
                <Box size={{ width: 'xxlarge', height: 'large'}}>
                    <Box colorIndex='light-2'>
                        <ListSubPageView ActiveComp={ ActiveComp }
                            onActiveCB={ this.handleOnActive }
                            activeIndex={ activeIndex }
                            mostSymptomaticFoods={ mostSymptomaticFoods }
                            meals={ meals } 
                            symptoms={ symptoms } />
                    </Box>
                </Box>
            </Box>
        )
    };
}

ListContainer.defaultProps = {
    mostSymptomaticFoods: {},
    meals: [],
    symptoms: [],
}

const componentList = [
    IndexView,
    TopTriggersView
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
})(ListContainer)