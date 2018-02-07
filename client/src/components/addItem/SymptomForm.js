import React, { Component } from 'react';
import InputField from '../reusables/InputField';
import SymptomFormLayer from './SymptomFormLayer';
import { createSymptom } from '../../actions/symptoms/createSymptom';
import { updateSymptomFormData } from '../../actions/symptomForm';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import { connect } from 'react-redux';
import AddIcon from 'grommet/components/icons/base/Add';
import Button from 'grommet/components/Button';

class SymptomForm extends Component {
    constructor() {
        super();

        this.state = {
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
        this.props.toggleSymptomModal( true )
    }
    
    handleHideForm = () => {
        this.props.toggleSymptomModal( false )
    }

    handleShowNotes = () => {
        this.setState({ showNotes: true })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState({ showNotes: false })
        this.props.createSymptom( this.state )
        this.props.toggleSymptomModal( false )
    }    

    render() {
        const { isVisible } = this.props.symptomFormData

        return (
            isVisible &&
                <SymptomFormLayer { ...this.state }
                    showNotesCB={ this.handleShowNotes }
                    hideFormCB={ this.handleHideForm }
                    onSubmitCB={ this.handleOnSubmit }
                    onChangeCB={ this.handleOnChange }/>
            ||
                <div style={{ display: 'none' }}></div>       
        )
    }
}

export const mapStateToProps = state => {
    return ({
        symptomFormData: state.symptomFormData,
    })
}

export default connect(mapStateToProps, { 
        updateSymptomFormData, 
        createSymptom,
        toggleSymptomModal,
    })(SymptomForm);