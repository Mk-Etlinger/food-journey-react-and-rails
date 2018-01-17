import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import InputField from '../reusables/InputField'
import { updateSymptom } from '../../actions/symptoms/updateSymptom';


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
            severity,
            stress_level,
            notes,
            date
        } = this.state
        
        return (
            <div style={{ display: 'inline-block' }}>                
                <div>
                    <Button
                        bsStyle="info"
                        bsSize="xsmall"
                        onClick={this.launchModal}
                    >
                    +
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit your {date} {this.props.description}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleOnSubmit} >
                            <InputField name="severity"
                                type="number" 
                                value={severity} 
                                onChangeCb={this.handleOnChange}/>
                            <InputField name="stress_level" 
                            type="number" value={stress_level} 
                            onChangeCb={this.handleOnChange}/>                 
                            <InputField name="notes" 
                                type="textarea" 
                                value={notes} 
                                onChangeCb={this.handleOnChange}
                                placeholder={"Notes..."}/>
                        </form>              
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleOnSubmit}>Update</Button>
                    </Modal.Footer>
                    </Modal>
                </div>
                
            </div>
        )
    }
}
export default connect(null, { updateSymptom })(ShowSymptomModal);