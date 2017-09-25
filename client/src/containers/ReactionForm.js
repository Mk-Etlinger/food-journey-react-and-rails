import React, { Component } from 'react';

class ReactionForm extends Component {
    constructor() {
        super();

        this.state = {
            severity: '',
            stressLevel: '',
            notes: '',
            occurredAt: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    render() {
        return (
            <div>
                Reaction Form
                <div>
                    <label htmlFor="">
                        Severity:
                        <input type="number" 
                        name='severity' 
                        value={this.state.severity} 
                        onChange={this.handleInputChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Stress level:
                        <input type="number" 
                        name='stressLevel' 
                        value={this.state.stressLevel} 
                        onChange={this.handleInputChange} />
                    </label>
                </div>
                <div>                    
                    <label htmlFor="">
                        Notes:
                        <textarea name="notes"                    
                            value={this.state.notes} 
                            onChange={this.handleInputChange}>                        
                        </textarea> 
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Occurred
                        <input type="number" 
                        name='occurredAt' 
                        value={this.state.occurredAt} 
                        onChange={this.handleInputChange} />
                        Hours Ago
                    </label>
                </div>
            </div>
        )
    }
}

export default ReactionForm;