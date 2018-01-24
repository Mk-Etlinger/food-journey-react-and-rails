import React, { Component } from 'react';
import InputField from '../reusables/InputField';
import { createSymptom } from '../../actions/symptoms/createSymptom';
import { updateSymptomFormData } from '../../actions/symptomForm';
import { hideMealButton, showMealButton } from '../../actions/toggleMealButton';
import { connect } from 'react-redux';
import AddIcon from 'grommet/components/icons/base/Add';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';

class SymptomForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            showNotes: false,
            description: '',
            severity: 0,
            stress_level: 0,
            notes: '',
            occurred_at: 0,
        }
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })         
    }

    handleShowForm = () => {
        this.setState({ showForm: true })
        this.props.hideMealButton()
    }
    
    handleShowNotes = () => {
        this.setState({ showNotes: true })
    }
    
    handleHideForm = () => {
        this.setState({ showForm: false })
        this.props.showMealButton()
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState({ showForm: false })
        this.props.createSymptom(this.state)
        this.props.showMealButton()
    }    

    render() {
        const { description, severity, stress_level, occurred_at, notes } = this.state
        const { mealFormData } = this.props
        
        return (
            this.state.showForm ?
            <div style={ divStyle }>
                <Form compact onSubmit={ this.handleOnSubmit } >
                    <span onClick={ this.handleHideForm } style={{  margin: '0 0 99% 97%', cursor: 'pointer'  }}>x</span>
                    <InputField name="description" 
                        type="text" 
                        value={ description } 
                        onChangeCb={ this.handleOnChange }
                        placeholder={ "What's ailing you?" }/>
                    <InputField name="severity"
                        type="number" 
                        value={ severity } 
                        onChangeCb={ this.handleOnChange }/>
                    <InputField name="stress_level" 
                        displayName="Stress level"
                        value={ stress_level } 
                        type="number"
                        onChangeCb={ this.handleOnChange }/>
                    <InputField name="occurred_at"
                        displayName="Duration in hours" 
                        type="number" 
                        value={ occurred_at } 
                        onChangeCb={ this.handleOnChange }/>                    
                    
                    { this.state.showNotes ?
                        <InputField name="notes" 
                            textarea={ true }
                            value={ notes } 
                            onChangeCb={ this.handleOnChange }
                            placeholder={ "Notes..." }/>
                       
                    :
                        <Button id='notes'
                            icon={ <AddIcon /> }
                            onClick={this.handleShowNotes}
                            label='notes' />
                    }
                    <Footer pad='small' 
                        justify='center'>
                        <Button type="submit"
                            primary
                            pad='small'
                            label="Create Meal"/>
                    </Footer>
                </Form>              
            </div>
            :
            <div>
                { mealFormData.active || 
                    <Button id='SymptomForm'
                        icon={ <AddIcon /> }
                        label='Symptom'
                        onClick={ this.handleShowForm } />
                }
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return ({
        mealFormData: state.mealFormData,
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
    border: '1px solid  #d8edf3', 
    boxShadow: '2px 6px 6px grey', 
    borderRadius: '4px' , 
    padding: '20px', 
    margin: '0 auto 0 auto' 
}