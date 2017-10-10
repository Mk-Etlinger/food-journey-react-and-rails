import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import InputField from './InputField'
import RadioInput from './RadioInput'
import { updateMeal } from '../actions/updateMeal';


class ShowMealModal extends Component {
    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this)
    }

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
        const { 
            mealId, 
            meal_type, 
            ingredients, 
            symptomId, 
            severity,
            stress_level, 
            ocurred_at,
            description,
            date
        } = this.state
        
        return (
            <div style={{ display: 'inline-block' }}>                
                <div>
                    <Button
                        bsSize="xsmall"
                        onClick={this.launchModal}
                    >
                    {meal_type !== undefined ? 
                        this.props.meal_type.charAt(0).toUpperCase() 
                    : 
                        '+'
                    }
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit your {date} {this.props.meal_type || description}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleOnSubmit}>                    
                            <RadioInput value="breakfast" 
                                meal_type={meal_type} 
                                onChangeCb={this.handleOnChange} />
                            <RadioInput value="lunch" 
                                meal_type={meal_type} 
                                onChangeCb={this.handleOnChange} />
                            <RadioInput value="dinner" 
                                meal_type={meal_type} 
                                onChangeCb={this.handleOnChange} />
                            <RadioInput value="snack" 
                                meal_type={meal_type} 
                                onChangeCb={this.handleOnChange} />
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