import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../reusables/InputField'
import { updateSymptom } from '../../actions/symptoms/updateSymptom';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';


class ShowSymptomModal extends Component {
    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this)
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
            severity,
            stress_level,
            notes,
            date
        } = this.state
        
        return (
            <div style={{ display: 'inline-block' }}>
                <Button box
                    colorIndex='neutral-1'
                    separator='right'
                    label='+'
                    size="xsmall"
                    onClick={ this.launchModal } />
                { showModal && 
                    <Layer closer
                        overlayClose
                        onClose={ this.closeModal }>
                        <h2>Edit your { date } { this.props.description }</h2>
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
            </div>
        )
    }
}
export default connect(null, { updateSymptom })(ShowSymptomModal);