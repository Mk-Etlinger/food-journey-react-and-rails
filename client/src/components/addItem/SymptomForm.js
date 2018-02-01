import React, { Component } from 'react';
import InputField from '../reusables/InputField';
import { createSymptom } from '../../actions/symptoms/createSymptom';
import { updateSymptomFormData } from '../../actions/symptomForm';
import { hideMealButton, showMealButton } from '../../actions/toggleMealButton';
import { connect } from 'react-redux';
import FormFields from 'grommet/components/FormFields';
import EditIcon from 'grommet/components/icons/base/Edit';
import AddIcon from 'grommet/components/icons/base/Add';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';

class SymptomForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            showNotes: false,
            description: '',
            severity: '',
            stress_level: '',
            notes: '',
            occurred_at: '',
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
        this.setState({ showForm: false, showNotes: false })
        this.props.showMealButton()
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState({ showForm: false, showNotes: false })
        this.props.createSymptom(this.state)
        this.props.showMealButton()
    }    

    render() {
        const { description, severity, stress_level, occurred_at, notes } = this.state
        const { mealFormData } = this.props
        
        return (
            this.state.showForm ?
                 <Layer closer
                    overlayClose
                    onClose={ this.handleHideForm }>
                    <h2>What's Ailing You?</h2>
                    <Form pad='small'
                        onSubmit={ this.handleOnSubmit }>
                        <InputField name="description" 
                            placeholder="Headache, bloating, etc."
                            type="text" 
                            value={ description } 
                            onChangeCb={ this.handleOnChange }
                            />
                        <InputField name="severity"
                            type="number"
                            placeholder="1-10"
                            value={ severity } 
                            onChangeCb={ this.handleOnChange }/>
                        <InputField name="stress_level" 
                            displayName="Stress level"
                            placeholder="1-10"
                            type="number" 
                            value={ stress_level } 
                            onChangeCb={ this.handleOnChange }/>
                        <InputField name="occurred_at"
                            displayName="When did the symptoms begin?"
                            placeholder="0.5 hrs"
                            step='.5'
                            type="number" 
                            value={ occurred_at } 
                            onChangeCb={ this.handleOnChange }/>
                        { this.state.showNotes ?
                            <InputField name="notes" 
                                textarea={ true }
                                value={ notes } 
                                onChangeCb={ this.handleOnChange }
                                placeholder="Note your experience" />
                        
                        :
                            <Box margin={{ top: 'small' }}
                                align='start'>  
                                <Button id='notes'
                                    plain
                                    icon={ <EditIcon /> }
                                    onClick={this.handleShowNotes}
                                    label='notes' />
                            </Box>
                        }                 
                        <Footer pad='small' 
                            justify='center'>
                            <Button type="submit"
                                primary
                                pad='small'
                                label='Add' />
                        </Footer>
                    </Form>
                </Layer> 
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