import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            <div style={{ display: 'inline-block' }}>
                    <Button primary
                        box
                        separator='right'
                        label={ this.props.meal_type.charAt(0).toUpperCase() }
                        onClick={ this.launchModal } />
                { showModal && 
                    <Layer overlayClose
                        closer
                        onClose={ this.closeModal }>
                        <Form pad='small'
                            onSubmit={ this.handleOnSubmit }> 
                            <h2>Edit your { date } { this.props.meal_type }</h2>
                             <ToggleRadioButtons
                                currentValue={ meal_type }
                                name='meal_type'
                                fields={ ['breakfast', 'lunch', 'dinner', 'snack'] }
                                onChangeCb={ this.handleOnChange }/>
                            <InputField name="ingredients" 
                                type="text"
                                value={ ingredients }
                                onChangeCb={ this.handleOnChange }
                                placeholder={ "Eg: eggs, bacon, salad" }/>
                            <Footer pad='small' 
                                justify='center'>
                                <Button type="submit"
                                    primary
                                    pad='small'
                                    label='Update' />
                        </Footer>
                        </Form>
                    </Layer>
                }
            </div>
        )
    }
}
export default connect(null, { updateMeal })(ShowMealModal);