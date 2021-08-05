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

class LoginForm extends Component {
    state = { password: '', email: '', submittedPassword: '', submittedEmail: '' }
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { password, email } = this.state
  
      this.setState({ submittedPassword: password, submittedEmail: email })
      
    }
  
    render() {
      const { password, email, submittedPassword, submittedEmail } = this.state
      console.log(submittedPassword + submittedEmail)

      return (
        <div>
            <Nav/>
            <Card raised centered style={{maxWidth: '100rem', minWidth: '23rem', marginTop:'5rem',marginBottom:'10rem' }} >
                <Image src={Logo} size="medium" fluid centered style={{ marginTop: '10px'}} />
                <Grid  style={{ height: '340px', paddingLeft: '10px' }} verticalAlign=''>
                    <Form size="large" onSubmit={this.handleSubmit} >
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
                        </Grid.Row>     

                            <Form.Button content='Log In' style={{marginTop:'15px', width:'21rem'}} primary/>
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
  }
  
  export default LoginForm
