import React, { Component } from 'react';
import MealView from './MealView';
import SymptomView from './SymptomView';
import Stats from './Stats'
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';

class Overview extends Component {
    constructor() {
        super()

        this.state = {
            tableActive: false,
            dataVisActive: false,
            overviewActive: true,
        }

        this.handleClickDynamicRender = this.handleClickDynamicRender.bind(this)
    }

    handleClickDynamicRender = (e) => {
        for (let key in this.state) {
           key === e.target.className ?
                this.setState({[key]: true}) 
            : 
                this.setState({[key]: false})
        }
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
        const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <div>
                <div onMouseOver="" style={OverviewDivStyle}>
                    <h2 className="overviewActive" onClick={this.handleClickDynamicRender}>Overview</h2>
                </div>
                <div style={OverviewDivStyle}>
                    <h2 className="tableActive" onClick={this.handleClickDynamicRender}>Table View</h2>
                </div>
                <div style={OverviewDivStyle}>
                    <h2 className="dataVisActive" onClick={this.handleClickDynamicRender}>Visual View</h2>
                </div>
                { this.state.overviewActive ?
                    <div style={{ marginTop: 40 }}>
                        { isMostSymptomaticFoodsLoaded && <Stats mostSymptomaticFoods={mostSymptomaticFoods}/> }
                    </div> 
                :
                    <div>
                        
                    </div> 
                }
                { this.state.tableActive ?
                    <div style={{ marginTop: 40 }}>
                        { isMealLoaded && <MealView meals={meals} symptoms={symptoms}/> }
                    </div> 
                :
                    <div>
                        
                    </div> 
                }
                { this.state.dataVisActive ?
                    <div style={{ marginTop: 40 }}>
                        { isSymptomLoaded && <SymptomView symptomsIndex={symptoms}/> }
                    </div>
                :
                    <div>

                    </div>
                }
            </div>
        )
    };
}

Overview.defaultProps = {
    mostSymptomaticFoods: {},
}

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
})(Overview)