import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { 
    Button, 
    Form, 
    Grid, 
    Image, 
    Divider,
    Card } 
from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'
import Footer from "../../components/footer/footer"
import Nav from "../../components/navbar/navbar"

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        const userId = mutationResponse.data.login.user._id
        Auth.login(token, userId);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
      
    };
  
    return (
        <div>
            <Nav/>
            <Card raised centered style={{maxWidth: '100rem', minWidth: '23rem', marginTop:'5rem',marginBottom:'10rem' }} >
                <Image src={Logo} size="medium" fluid centered style={{ marginTop: '10px'}} />
                <Grid  style={{ height: '360px', paddingLeft: '10px' }} verticalAlign=''>
                    <Form size="large" onSubmit={handleFormSubmit} >
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                    style={{width:'21rem'}}
                                    label='Email'
                                    placeholder='Email'
                                    name='email'
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                style={{width:'21rem'}}
                                label='Password'
                                placeholder='******'
                                type="password"
                                name="password"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </Grid.Row> 
                        {error ? (
                            <div style={{width:'21rem', marginTop:'15px'}}>
                                <p className="error-text">The provided credentials are incorrect</p>
                            </div>
                        ) : null}    

                        <Form.Button type="submit" content='Log In' style={{marginTop:'15px', width:'21rem'}} primary/>
                        <Divider centered style={{width:'21rem'}} horizontal>OR</Divider>
                        <Button content='Sign Up' style={{width:'21rem'}} href='/signup'/>
                            
                        {/* <strong>onChange:</strong>
                        <pre>{JSON.stringify({ password, email }, null, 2)}</pre>
                        <strong>onSubmit:</strong>
                        <pre>{JSON.stringify({ submittedPassword, submittedEmail }, null, 2)}</pre> */}
                    </Form>        
                </Grid>
            </Card>
            <Footer/>
        </div>
      )
  }
  
  export default Login
