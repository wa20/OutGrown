// import React from 'react'
import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
// import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const Footer = () => (
<Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a'>Sitemap</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>About Us</List.Item>
              {/* <List.Item as='a'>Gazebo Plans</List.Item> */}
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='T&Cs' />
            <List link inverted>
              <List.Item as='a'>Terms of Service</List.Item>
              <List.Item as='a'>Privacy Policy</List.Item>
              <List.Item as='a'>Refund Policy</List.Item>
              <List.Item as='a'>FAQ</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
