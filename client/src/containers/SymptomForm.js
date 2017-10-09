import React, { Component } from 'react';
import InputField from '../components/InputField';
import { createSymptom } from '../actions/createSymptom';
import { updateSymptomFormData } from '../actions/symptomForm';
import { hideMealButton, showMealButton } from '../actions/toggleMealButton';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class SymptomForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(e) {
        const { name, value } = e.target

        const currentSymptomFormData = Object.assign({}, this.props.symptomFormData, {
            [name]: value
        })
        this.props.updateSymptomFormData(currentSymptomFormData)         
    }

    handleShowForm(e) {
        this.setState({ showForm: true })
        this.props.hideMealButton()
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.setState({ showForm: false })
        this.props.createSymptom(this.props.symptomFormData)
        this.props.showMealButton()
    }    

    render() {
        const { description, severity, stress_level, occurred_at, notes } = this.props.symptomFormData
        const { mealFormData } = this.props
        return (
            this.state.showForm === true ?
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <InputField name="description" 
                        type="text" value={description} 
                        onChangeCb={this.handleOnChange}
                        placeholder={"What's ailing you?"}/>
                    <InputField name="severity"
                        type="number" 
                        value={severity} 
                        onChangeCb={this.handleOnChange}/>
                    <InputField name="stress_level" 
                    type="number" value={stress_level} 
                    onChangeCb={this.handleOnChange}/>
                    <InputField name="occurred_at" 
                        type="number" 
                        value={occurred_at} 
                        onChangeCb={this.handleOnChange}/>                    
                    <InputField name="notes" 
                        type="textarea" 
                        value={notes} 
                        onChangeCb={this.handleOnChange}
                        placeholder={"Notes..."}/>
                    <input type="submit" value="Create Symptom"/>
                </form>              
            </div>
            :
            <div>
                {mealFormData.active === true ? 
                    '' // if symptom form is active, hide add meal button
                :
                    <Button bsStyle="primary" onClick={this.handleShowForm}>+ Symptom</Button>
                }
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return ({
        mealFormData: state.mealFormData,
        symptomFormData: state.symptomFormData,
        symptoms: state.symptoms
    })
}

export default connect(mapStateToProps, { 
        updateSymptomFormData, 
        hideMealButton,
        showMealButton,
        createSymptom 
    })(SymptomForm);