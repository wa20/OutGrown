import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { 
    Button, 
    Form, 
    Grid, 

    Image, 
    Divider,
    Card } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'
import Footer from "../../components/footer/footer"
import Nav from "../../components/navbar/navbar"

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
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
                <Grid  style={{ height: '410px', paddingLeft: '10px' }} verticalAlign='left'>
                    <Form size="large" onSubmit={handleFormSubmit} >
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                    style={{width:'21rem'}}
                                    label='Username'
                                    placeholder='Username'
                                    name='username'
                                    type="username"
                                    id="username"
                                    onChange={handleChange}
                                />
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                    style={{width:'21rem'}}
                                    label='Email'
                                    placeholder='Email'
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                style={{width:'21rem'}}
                                label='Password'
                                placeholder='Password'
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </Grid.Row>     
                            <Form.Button type="submit" content='Create account' style={{marginTop:'15px', width:'21rem'}} primary/>
                            <Divider style={{width:'21rem'}} horizontal>OR</Divider>
                            <Button content='Back to login screen' style={{width:'21rem'}} href="/login"/>
                               
                            {/* <strong>onChange:</strong>
                            <pre>{JSON.stringify({ username, password, email }, null, 2)}</pre>
                            <strong>onSubmit:</strong>
                            <pre>{JSON.stringify({ submittedUsername, submittedPassword, submittedEmail }, null, 2)}</pre> */}
                    </Form>        
                </Grid>
            </Card>
            <Footer/>
        </div>
      );
  }
  
  export default Signup;
  