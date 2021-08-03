import React from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment, Divider } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'

const SignupForm = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Container fluid as='h2' color='teal' textAlign='center'>
                <Image fluid src={Logo} alt ="logo" size="small" centered/>
            </Container>
            <Header as='h2' color='teal' textAlign='center'> Create your account</Header>
            <Form size='large'>
                <Segment style={{width: 450}}>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large' >
                       Create account
                    </Button>
                </Segment>
            </Form>
            <Divider horizontal>Or</Divider>
            <Message style={{width: 450}}>
                <a href='#'>Return to log in</a>
            </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignupForm