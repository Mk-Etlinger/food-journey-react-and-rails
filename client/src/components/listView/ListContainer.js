import React, { Component } from 'react';
import IndexView from './IndexView';
import TopTriggersView from './TopTriggersView';
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

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
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
            { activeComp: ActiveComp } = this.state
        const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <Box flex
                align='center'
                margin='small'
                colorIndex='light-2'>
                <Box size={{ width: 'xxlarge', height: 'large'}}>
                    {/*<Box
                        basis='1/4'>
                        <Box pad='small' className='darkGreenBG' >
                            <Heading align='start'>
                            Entries
                            </Heading>
                        </Box>
                    </Box>*/}
                    <Box colorIndex='light-2'>
                        <Tabs onActive={ this.handleClick }
                            activeIndex={ this.state.activeIndex } >
                            <Tab title='Entries' >
                                { isMealLoaded && <ActiveComp meals={ meals } 
                                    symptoms={ symptoms } 
                                    mostSymptomaticFoods={ mostSymptomaticFoods }/> 
                                }
                            </Tab>
                        </Tabs>
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