import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealFormLayer from '../reusables/MealFormLayer';
import { createMeal } from '../../actions/meals/createMeal';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';

class MealFormContainer extends Component {
    constructor() {
        super();

        this.state = initialState
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({ [ name ]: value })
    }

    handleShowForm = () => {
        this.props.toggleMealModal( true )
    }
    
    handleHideForm = () => {
        this.props.toggleMealModal( false )
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState( initialState )
        this.props.createMeal( this.state )
        this.props.toggleMealModal( false )
    }

    render() {
        const { isVisible } = this.props.mealFormData

        return (
            isVisible ? 
                <MealFormLayer { ...this.state }
                    label='Add'
                    header="What's on the Menu?"
                    hideFormCB={ this.handleHideForm }
                    onSubmitCB={ this.handleOnSubmit }
                    onChangeCB={ this.handleOnChange }/>
            :
                <div style={{ display: 'none' }}></div>
        )
    }
}

const initialState = {
    meal_type: '',
    ingredients: '',
}

const mapStateToProps = state => {
    return {
        mealFormData: state.mealFormData,
    }
}

export default connect(mapStateToProps, { 
    createMeal,
    toggleMealModal 
})(MealFormContainer);

