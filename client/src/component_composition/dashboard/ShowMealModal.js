import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import InputField from '../reusables/InputField'
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import { updateMeal } from '../../actions/meals/updateMeal';


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

    handleRadioOnChange = (value) => {
        this.setState({ meal_type: value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.updateMeal(this.state)
        this.closeModal()
    }

    launchModal = () => this.setState({ showModal: true})
    
    closeModal = () => this.setState({ showModal: false})
    
    render() {
        const { ingredients, date, meal_type } = this.state
        
        return (
            <div style={{ display: 'inline-block' }}>                
                <div>
                    <Button
                        bsSize="xsmall"
                        onClick={this.launchModal}
                    >
                    {this.props.meal_type.charAt(0).toUpperCase()}
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit your {date} {this.props.meal_type}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleOnSubmit}>                    
                             <ToggleRadioButtons
                                currentValue={meal_type}
                                name='meal_type'
                                fields={['breakfast', 'lunch', 'dinner', 'snack']}
                                onChangeCb={this.handleRadioOnChange}/>
                            <InputField name="ingredients" 
                                type="text"
                                value={ingredients}
                                onChangeCb={this.handleOnChange}
                                placeholder={"Eg: eggs, bacon, salad"}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleOnSubmit}>Update</Button>
                    </Modal.Footer>
                    </Modal>
                </div>
                
            </div>
        )
    }
}
export default connect(null, { updateMeal })(ShowMealModal);