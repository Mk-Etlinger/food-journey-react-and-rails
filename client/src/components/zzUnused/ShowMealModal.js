import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealFormLayer from '../reusables/MealFormLayer'
import InputField from '../reusables/InputField'
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import { updateMeal } from '../../actions/meals/updateMeal';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';

class ShowMealModal extends Component {
    
    componentWillMount() {
        this.setState({ ...this.props, showModal: false, })
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.updateMeal(this.state)
        this.closeModal()
    }

    launchModal = () => this.setState({ showModal: true})
    
    closeModal = () => this.setState({ showModal: false})
    
    render() {
        const { ingredients, date, meal_type, showModal } = this.state
        
        return (
            <div style={{ margin: '1px' }}>
                    <Button primary
                        box
                        separator='right'
                        label={ this.props.meal_type.charAt(0).toUpperCase() }
                        onClick={ this.launchModal } />
                { showModal && 
                    <MealFormLayer { ...this.state }
                        label='Update'
                        header={ `Update your ${ date } ${ this.props.meal_type }`  }
                        hideFormCB={ this.closeModal }
                        onSubmitCB={ this.handleOnSubmit }
                        onChangeCB={ this.handleOnChange }/>
                }
            </div>
        )
    }
}
export default connect(null, { updateMeal })(ShowMealModal);