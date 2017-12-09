import React, { Component } from 'react';
import InputField from '../reusables/InputField';
import { createSymptom } from '../../actions/symptoms/createSymptom';
import { updateSymptomFormData } from '../../actions/symptomForm';
import { hideMealButton, showMealButton } from '../../actions/toggleMealButton';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

class SymptomForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            showNotes: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleHideForm = this.handleHideForm.bind(this)
        this.handleShowNotes= this.handleShowNotes.bind(this)
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
    
    handleShowNotes(e) {
        this.setState({ showNotes: true })
    }
    
    handleHideForm(e) {
        this.setState({ showForm: false })
        this.props.showMealButton()
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
            <div style={divStyle}>
                <span onMouseOver="" onClick={this.handleHideForm} style={{ margin: '0 0 99% 97%', cursor: 'pointer' }}>x</span>
                <Form inline onSubmit={this.handleOnSubmit} >
                    <InputField name="description" 
                        type="text" value={description} 
                        onChangeCb={this.handleOnChange}
                        placeholder={"What's ailing you?"}/>
                    <InputField name="severity"
                        type="number" 
                        value={severity} 
                        onChangeCb={this.handleOnChange}/>
                    <InputField name="stress_level" 
                        displayName="Stress level"
                        value={stress_level} 
                        type="number"
                        onChangeCb={this.handleOnChange}/>
                    <InputField name="occurred_at"
                        displayName="Duration in hours" 
                        type="number" 
                        value={occurred_at} 
                        onChangeCb={this.handleOnChange}/>                    
                    
                    {this.state.showNotes ?
                        <InputField name="Notes" 
                            type="textarea" 
                            value={notes} 
                            onChangeCb={this.handleOnChange}
                            placeholder={"Notes..."}/>
                       
                    :
                        <Button bsSize="small"
                            bsStyle="primary"  
                            onClick={this.handleShowNotes}>
                            + Notes
                        </Button>
                    }
                    <br/>
                    <input type="submit" style={{ marginTop: '5px' }} value="Create Symptom"/>
                </Form>              
            </div>
            :
            <div>
                {mealFormData.active === true || 
                    <Button 
                        bsStyle="primary" 
                        bsSize="large" 
                        onClick={this.handleShowForm}
                        >
                        + Symptom
                        </Button>}
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

let divStyle = { 
    width: '40%', 
    border: '1px solid  #d8edf3', 
    boxShadow: '2px 6px 6px grey', 
    borderRadius: '4px' , 
    padding: '20px', 
    margin: '0 auto 0 auto' 
}