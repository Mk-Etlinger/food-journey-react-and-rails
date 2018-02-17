import React from 'react';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormFields from 'grommet/components/FormFields';
import Layer from 'grommet/components/Layer';

const MealFormLayer = ({
    label,
    header,
    ingredients,
    meal_type, 
    hideFormCB, 
    onChangeCB, 
    onSubmitCB
}) => {

    return (
        <Layer closer
            overlayClose
            onClose={ hideFormCB }>
            <Form 
                onSubmit={ onSubmitCB }> 
                <FormFields>
                    <h2>{ header }</h2>
                    <ToggleRadioButtons
                        currentValue={ meal_type }
                        name='meal_type'
                        fields={ ['breakfast', 'lunch', 'dinner', 'snack'] }
                        onChangeCb={ onChangeCB }/>
                    <InputField name="ingredients" 
                        type="text"
                        value={ ingredients }
                        onChangeCb={ onChangeCB }
                        placeholder={ "Eg: eggs, bacon, salad" }/>
                </FormFields>
                <Footer pad='small' 
                    justify='center'>
                    <Button type="submit"
                        primary
                        pad='small'
                        label={ label } />
                </Footer>
            </Form>
        </Layer>
    )    
}

export default MealFormLayer