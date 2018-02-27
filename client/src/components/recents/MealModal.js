import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealFormLayer from '../reusables/MealFormLayer'
import { updateMeal } from '../../actions/meals/updateMeal';
import { toggleUpdateMealModal } from '../../actions/meals/toggleMealModal';
import Box from 'grommet/components/Box';
import ListItem from 'grommet/components/ListItem';
import FormEditIcon from 'grommet/components/icons/base/FormEdit';
import carrotImage from '../../images/carrot_30px.png';
import Image from 'grommet/components/Image';

class MealModal extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            ...props, 
        }
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.updateMeal(this.state)
        this.closeModal()
    }

    launchModal = () => this.setState({ showModal: true})
    
    closeModal = () => this.setState({ showModal: false})
    
    render() {
        const { ingredients, date, meal_type, showModal } = this.state
        
        return (
            <Box className='borderBoxShadowSmall'
                margin='small'>
                <ListItem  onClick={ this.launchModal }
                    justify='between'>
                    <span>
                        <img src={ carrotImage } style={ imgStyle } alt="meal"/> 
                    </span>
                    <span className='secondary'>
                        { this.props.meal_type }
                    </span>
                </ListItem>

                { showModal && 
                    <MealFormLayer { ...this.state }
                        label='Update'
                        header={ `Update your ${ date } ${ this.props.meal_type }`  }
                        hideFormCB={ this.closeModal }
                        onSubmitCB={ this.handleOnSubmit }
                        onChangeCB={ this.handleOnChange }/>
                }
            </Box>
        )
    }
}

export default connect( null, { updateMeal, toggleUpdateMealModal })( MealModal );

const imgStyle = {
    marginRight: '10px'
}