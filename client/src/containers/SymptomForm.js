import React, { Component } from 'react';
import InputField from '../components/InputField';

const initialState = {
            showForm: false,
            description: '',
            severity: '',
            stressLevel: '',
            notes: '',
            occurredAt: '',            
        }

class SymptomForm extends Component {
    constructor() {
        super();

        this.state = initialState;

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

     handleInputChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })        
    }

    handleShowForm(e) {
        this.setState({
            showForm: true
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        // fetch/post to Symptoms/new
        this.setState(initialState)        
    }

    render() {
        return (
            this.state.showForm === true ?
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <InputField name="description" type="text" value={this.state.description} onChangeCb={this.handleInputChange}/>
                    <InputField name="severity" type="number" value={this.state.severity} onChangeCb={this.handleInputChange}/>
                    <InputField name="notes" type="textarea" value={this.state.notes} onChangeCb={this.handleInputChange}/>
                    <InputField name="stressLevel" type="number" value={this.state.stressLevel} onChangeCb={this.handleInputChange}/>
                    <InputField name="occurredAt" type="number" value={this.state.occurredAt} onChangeCb={this.handleInputChange}/>
                    <input type="submit" value="Create Symptom"/>
                </form>              
            </div>
            :
            <div>
                <button onClick={this.handleShowForm}>Add a Symptom</button>
            </div>
        )
    }
}

export default SymptomForm;