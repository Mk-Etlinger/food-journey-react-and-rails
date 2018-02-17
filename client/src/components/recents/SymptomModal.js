import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../reusables/InputField'
import { updateSymptom } from '../../actions/symptoms/updateSymptom';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import ListItem from 'grommet/components/ListItem';
import symptomImage from '../../images/symptom_25px.png';

class ShowSymptomModal extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.setState({ ...this.props, showModal: false, })
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.updateSymptom(this.state)
        this.closeModal()
    }

    launchModal = () => this.setState({ showModal: true})
    
    closeModal = () => this.setState({ showModal: false})
    
    render() {
        const { 
            showModal,
            description,
            severity,
            stress_level,
            notes,
            date
        } = this.state
        
        return (
            <Box className='borderBoxShadowSmall'
                margin='small'>
                <ListItem onClick={ this.launchModal }
                    justify='between'>
                    <span style={ imgStyle }>
                        <img src={ symptomImage } 
                            
                            alt="symptom" /> 
                    </span>
                    <span className='secondary'>
                        { description }
                    </span>
                </ListItem>
                { showModal && 
                    <Layer closer
                        overlayClose
                        onClose={ this.closeModal }>
                        <h2 style={{ marginTop: '5px' }}>Edit your { date } { this.props.description }</h2>
                        <Form pad='small'
                            onSubmit={ this.handleOnSubmit }>
                            <InputField name="severity"
                                type="number" 
                                value={ severity } 
                                onChangeCb={ this.handleOnChange }/>
                            <InputField name="stress_level" 
                                displayName="Stress level"
                                type="number" 
                                value={ stress_level } 
                                onChangeCb={ this.handleOnChange }/>                 
                            <InputField name="notes" 
                                textarea={ true }
                                value={ notes } 
                                onChangeCb={ this.handleOnChange }
                                placeholder={ "Notes..." }/>
                            <Footer pad='small' 
                                justify='center'>
                                <Button type="submit"
                                    primary
                                    pad='small'
                                    label='Update' />
                            </Footer>
                        </Form>
                    </Layer>
                }
            </Box>
        )
    }
}

export default connect(null, { updateSymptom })(ShowSymptomModal);

const imgStyle = {
    marginRight: '16px'
}