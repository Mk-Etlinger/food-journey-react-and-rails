import React, { Component } from 'react';
import SymptomFormLayer from '../reusables/SymptomFormLayer';
import { createSymptom } from '../../actions/symptoms/createSymptom';
import { updateSymptomFormData } from '../../actions/symptomForm';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import { connect } from 'react-redux';


class SymptomFormContainer extends Component {
    constructor() {
        super();

        this.state = initialState
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
        this.setState( initialState )
        this.props.createSymptom( this.state )
        this.props.toggleSymptomModal( false )
    }    

    render() {
        const { isVisible } = this.props.symptomFormData

        return (
            isVisible ?
                <SymptomFormLayer { ...this.state }
                    showNotesCB={ this.handleShowNotes }
                    hideFormCB={ this.handleHideForm }
                    onSubmitCB={ this.handleOnSubmit }
                    onChangeCB={ this.handleOnChange }/>
            :
                <div style={{ display: 'none' }}></div>       
        )
    }
}

const initialState = {
    showNotes: false,
    description: '',
    severity: '',
    stress_level: '',
    notes: '',
    occurred_at: '',
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
    })(SymptomFormContainer);