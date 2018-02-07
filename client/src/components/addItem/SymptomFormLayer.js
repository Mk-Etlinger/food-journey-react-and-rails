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

const SymptomFormLayer = ({ 
    occurred_at,
    description,
    severity,
    stress_level,
    notes,
    showNotes,
    showNotesCB,
    showFormCB,
    hideFormCB, 
    onChangeCB, 
    onSubmitCB
}) => {
    return (
        <Layer closer
            overlayClose
            onClose={ hideFormCB }>
            <h2>What's Ailing You?</h2>
            <Form pad='small'
                onSubmit={ onSubmitCB }>
                <InputField name="description" 
                    placeholder="Headache, bloating, etc."
                    type="text" 
                    value={ description } 
                    onChangeCb={ onChangeCB }/>
                <InputField name="severity"
                    type="number"
                    placeholder="1-10"
                    value={ severity } 
                    onChangeCb={ onChangeCB }/>
                <InputField name="stress_level" 
                    displayName="Stress level"
                    placeholder="1-10"
                    type="number" 
                    value={ stress_level } 
                    onChangeCb={ onChangeCB }/>
                <InputField name="occurred_at"
                    displayName="When did the symptoms begin?"
                    placeholder="0.5 hrs"
                    step='.5'
                    type="number" 
                    value={ occurred_at } 
                    onChangeCb={ onChangeCB }/>
                { showNotes ?
                    <InputField name="notes" 
                        textarea={ true }
                        value={ notes } 
                        onChangeCb={ onChangeCB }
                        placeholder="Note your experience" />
                
                :
                    <Box margin={{ top: 'small' }}
                        align='start'>  
                        <Button id='notes'
                            plain
                            icon={ <EditIcon /> }
                            onClick={ showNotesCB }
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
    )    
}

export default SymptomFormLayer