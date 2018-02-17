import React from 'react';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';

export const MealFormContainer = ({ onSubmitCB, onChangeCb, formData, hideForm }) => {
    const { meal_type, ingredients } = formData
    return (
        <div style={ divStyle }>
            <span onClick={ hideForm } style={{ margin: '0 0 99% 97%', cursor: 'pointer' }}>x</span>
            <Form onSubmit={ onSubmitCB }>
                <ToggleRadioButtons
                    currentValue={ meal_type }
                    name='meal_type'
                    fields={ ['breakfast', 'lunch', 'dinner', 'snack'] }
                    onChangeCb={ this.handleRadioOnChange }/>
                <InputField name="ingredients" 
                    type="text"
                    value={ ingredients }
                    onChangeCb={ onChangeCb }
                    placeholder={ "Eg: eggs, bacon, salad" }/>
                <input type="submit" value="Create Meal"/>
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