import React, { Component } from 'react'
import { Container, 
    Button, 
    Form, 
    Grid, 
    Header, 
    Image, 
    Message, 
    Segment, 
    Divider,
    Card } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'
import Footer from "../../components/footer/footer"
import Nav from "../../components/navbar/navbar"

class SignUpForm extends Component {
    state = { username: '', password: '', email: '', submittedUsername: '', submittedPassword: '', submittedEmail: '' }
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { username, password, email } = this.state
  
      this.setState({ submittedUsername: username, submittedPassword: password, submittedEmail: email })
      
    }
  
    render() {
      const { username, password, email, submittedUsername, submittedPassword, submittedEmail } = this.state
      console.log(username)
      console.log(password)
      console.log(email)
      console.log(submittedPassword)
      console.log(submittedEmail)
      console.log(submittedUsername)
      return (
        <div>
            <Nav/>
            <Card raised centered style={{maxWidth: '100rem', minWidth: '23rem', marginTop:'5rem',marginBottom:'10rem' }} >
                <Image src={Logo} size="medium" fluid centered style={{ marginTop: '10px'}} />
                <Grid  style={{ height: '410px', paddingLeft: '10px' }} verticalAlign='left'>
                    <Form size="large" onSubmit={this.handleSubmit} >
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                    style={{width:'21rem'}}
                                    label='Username'
                                    placeholder='Username'
                                    name='username'
                                    value={username}
                                    onChange={this.handleChange}
                                />
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                    style={{width:'21rem'}}
                                    label='Email'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange}
                                />
                        </Grid.Row>
                        <Grid.Row style={{marginTop:'1rem'}}>
                            <Form.Input
                                style={{width:'21rem'}}
                                label='Password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                            />
                            <Form.Button content='Create account' style={{width:'21rem'}} primary/>
                            <Divider style={{width:'21rem'}} horizontal>OR</Divider>
                            <Button content='Back to login screen' style={{width:'21rem'}} href="/login"/>
                        </Grid.Row>        
                            {/* <strong>onChange:</strong>
                            <pre>{JSON.stringify({ username, password, email }, null, 2)}</pre>
                            <strong>onSubmit:</strong>
                            <pre>{JSON.stringify({ submittedUsername, submittedPassword, submittedEmail }, null, 2)}</pre> */}
                    </Form>        
                </Grid>
            </Card>
            <Footer/>
        </div>
      )
    }
  }
  
  export default SignUpForm
