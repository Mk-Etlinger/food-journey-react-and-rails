import React, { Component } from 'react';
import InputField from '../components/InputField';

const initialState = {
            showForm: false,
            description: '',
            severity: '',
            stress_level: '',
            notes: '',
            occurred_at: '',            
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
        // fetch/post to Symptoms/create
            return fetch('/symptoms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                symptom: Object.assign({}, this.state, { 
                    ingredients_attributes: 
                        {                             
                            current_user_id: 1,
                            occurred_at: this.state.occurred_at,                            
                        },
                    reactions_attributes: 
                        {                             
                            severity: this.state.severity,
                            notes: this.state.notes,
                            stress_level: this.state.stress_level,
                        },
                    reaction_logs:
                        {
                            occurred_at: this.state.occurred_at
                        }
                    })
                })
            })
        .then(response => response.json())
        .then(meal => console.log(meal))
        .catch(err => console.log("error of ", err))
    }    

    render() {
        return (
            this.state.showForm === true ?
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <InputField name="description" type="text" value={this.state.description} onChangeCb={this.handleInputChange}/>
                    <InputField name="severity" type="number" value={this.state.severity} onChangeCb={this.handleInputChange}/>
                    <InputField name="stress_level" type="number" value={this.state.stress_level} onChangeCb={this.handleInputChange}/>
                    <InputField name="notes" type="textarea" value={this.state.notes} onChangeCb={this.handleInputChange}/>
                    <InputField name="occurred_at" type="number" value={this.state.occurred_at} onChangeCb={this.handleInputChange}/>                    
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