import React from 'react';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';

const Login = ({ onSubmitCB, onChangeCB, email, password }) => {    
    return (  
        <Box margin='large' >
            <Form compact >
                <FormFields>
                    <FormField label='email'>
                    <TextInput style={{ boxSizing: 'border-box' }} 
                        placeHolder='ex: root@journal.com'
                        tabIndex='1'
                        id='email'
                        name='email'
                        value={ email }
                        onDOMChange={ onChangeCB } />
                    </FormField>
                    <FormField label='password'>
                    <TextInput style={{ boxSizing: 'border-box' }}
                        placeHolder='password'
                        tabIndex='2'
                        type='password'
                        name='password'
                        value={ password }
                        onDOMChange={ onChangeCB } />
                    </FormField>
                </FormFields>
                <Footer pad={{ "vertical": "small" }}>
                    <Box margin={{ right: 'small' }} >
                    <Button plain
                        id='register'
                        tabIndex='4'
                        label='Register'
                        type='button'
                        onClick={ onSubmitCB } />
                    </Box>
                    <Box margin={{ left: 'small' }} >
                    <Button id='login'
                        tabIndex='3'
                        label='Login'
                        type='submit'
                        onClick={ onSubmitCB } />
                    </Box>
                </Footer>
            </Form>
        </Box>
    );
}

export default Login
