import React from 'react'
import { Container, Button, Header, Image } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'

const Hero = () => (
  <div>
    <Container text textAlign="center">
        <Image src={Logo} alt ="logo" size='medium' centered/>
        <Header as="h5">Exchange, buy and sell baby clothing/items</Header>
        <Button primary>Click Here</Button>
    </Container>
    
  </div>
)

export default Hero