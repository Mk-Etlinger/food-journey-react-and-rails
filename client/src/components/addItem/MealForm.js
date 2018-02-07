import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealFormLayer from './MealFormLayer';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import { createMeal } from '../../actions/meals/createMeal';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';
import AddIcon from 'grommet/components/icons/base/Add';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';

class MealForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meal_type: '',
            ingredients: '',
        }
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
        this.props.createMeal( this.state )
        this.props.toggleMealModal( false )
    }

    render() {
        const { isVisible } = this.props.mealFormData

        return (
            isVisible && 
                <MealFormLayer { ...this.state }
                    hideFormCB={ this.handleHideForm }
                    onSubmitCB={ this.handleOnSubmit }
                    onChangeCB={ this.handleOnChange }/>
            ||
                <div style={{ display: 'none' }}></div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mealFormData: state.mealFormData,
    }
}

export default connect(mapStateToProps, { 
    createMeal,
    toggleMealModal 
})(MealForm);

