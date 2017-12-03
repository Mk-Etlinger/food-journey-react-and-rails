import React, { Component } from 'react';
import MealView from './MealView';
import SymptomView from './SymptomView';
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';

class Overview extends Component {
    constructor() {
        super()

        this.state = {
            tableActive: false,
            dataVisActive: false,
            overviewActive: true,
        }
    }

    handleClickTable = (e) => {
        this.setState({
            tableActive: true,
            dataVisActive: false,
            overviewActive: false
        })
    }

    handleClickDataVis = (e) => {
        this.setState({
            dataVisActive: true,
            tableActive: false,
            overviewActive: false
        })
    }

    handleClickOverview = (e) => {
        this.setState({
            overviewActive: true,
            dataVisActive: false,
            tableActive: false
        })
    }

    componentDidMount() {
		this.props.getMeals();
		this.props.getSymptoms();
    };
    
    render(){
        const { meals } = this.props.meals, 
            { symptoms } = this.props.symptoms
        const isMealLoaded = meals.length > 0
        const isSymptomLoaded = symptoms.length > 0
        return (
            <div>
                <div onMouseOver="" style={OverViewDivStyle}>
                    <h2 onClick={this.handleClickOverview}>Overview</h2>
                </div>
                <div style={OverViewDivStyle}>
                    <h2 onClick={this.handleClickTable}>Table View</h2>
                </div>
                <div style={OverViewDivStyle}>
                    <h2 onClick={this.handleClickDataVis}>Visual View</h2>
                </div>
                { this.state.overviewActive ?
                    <div style={{ marginTop: 40 }}>
                        OVERVIEW TEMP
                    </div> 
                :
                    <div>
                        
                    </div> 
                }
                { this.state.tableActive ?
                    <div style={{ marginTop: 40 }}>
                        {isMealLoaded && <MealView meals={meals} symptoms={symptoms}/>}
                    </div> 
                :
                    <div>
                        
                    </div> 
                }
                {this.state.dataVisActive ?
                    <div style={{ marginTop: 40 }}>
                        {isSymptomLoaded && <SymptomView symptomsIndex={symptoms}/>}
                    </div>
                :
                    <div>

                    </div>
                }
            </div>
        )
    };
}

let OverViewDivStyle = {
    display: 'inline-block', 
    cursor: 'pointer', 
    width: '200px',
    border: 'solid black', 
    margin: '10px auto 0 auto'
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms
    })
}

export default connect(mapStateToProps, { getMeals, getSymptoms })(Overview)