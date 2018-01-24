import React from 'react';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';

export const SymptomForm = ({ onSubmitCB, onChangeCb, formData, hideForm, showNotes }) => {
    const { severity, description, stress_level, occurred_at, notes } = formData
    return (
        <div style={ divStyle }>
            <span onClick={ hideForm } style={{ margin: '0 0 99% 97%', cursor: 'pointer' }}>x</span>
            <Form inline onSubmit={ onSubmitCB } >
                <InputField name="description" 
                    type="text" 
                    value={ description } 
                    onChangeCb={  onChangeCb }
                    placeholder={ "What's ailing you?" }/>
                <InputField name="severity"
                    type="number" 
                    value={ severity } 
                    onChangeCb={ onChangeCb }/>
                <InputField name="stress_level" 
                    displayName="Stress level"
                    value={ stress_level } 
                    type="number"
                    onChangeCb={ onChangeCb }/>
                <InputField name="occurred_at"
                    displayName="Duration in hours" 
                    type="number" 
                    value={ occurred_at } 
                    onChangeCb={ onChangeCb }/>                    
                
                { showNotes ?
                    <InputField name="notes" 
                        type="textarea" 
                        value={ notes } 
                        onChangeCb={ onChangeCb }
                        placeholder={ "Notes..." }/>
                    
                :
                    <Button
                        style={{ width: '125px' }}
                        primary
                        onClick={ showNotes } 
                        value='+ Notes' />
                }
                <br/>
                <input type="submit" style={{ marginTop: '5px' }} value="Create Symptom"/>
            </Form> 
        </div>
    )
}

const divStyle = { 
    border: '1px solid  #d8edf3', 
    boxShadow: '2px 6px 6px grey', 
    borderRadius: '4px' , 
    padding: '20px'
}
