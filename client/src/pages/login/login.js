import React from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment, Divider } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'

const LoginForm = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Container fluid as='h2' color='teal' textAlign='center'>
                <Image fluid src={Logo} alt ="logo" size="small" centered/>
            </Container>
            <Header as='h2' color='teal' textAlign='center'> Log-in to your account</Header>
            <Form size='large'>
                <Segment style={{width: 450}}>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large' >
                        Login
                    </Button>
                </Segment>
            </Form>
            <Divider horizontal>Or</Divider>
            <Message style={{width: 450}}>
                New to us? <a href='#'>Sign Up</a>
            </Message>
            </Grid.Column>
        </Grid>
    )
}

export default LoginForm