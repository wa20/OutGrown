
import React, { Component } from 'react'

import PropTypes from 'prop-types'
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



const HomeContent = () => (
    <div>
      <Divider/>
      <Segment vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h1' style={{ fontSize: '2em', paddingBottom: '1em' }}>
                Customer Reviews
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign='center'>  
            <Grid.Column>
              <Header as='h3' style={{ fontSize: '1.5em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>Karen, mother of 3.</p>
              <Divider/>
              <Header as='h3' style={{ fontSize: '1.5em' }}>
                "My biggest regret in life is going with their competitior"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
              <Divider/>
              <Header as='h3' style={{ fontSize: '1.5em' }}>
                "Best app i've ever seen"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Mark Zukerberg
              </p>
              <Divider/>
              <Header as='h3' style={{ fontSize: '1.5em' }}>
                "Whats the point in Amzon anymore?"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Jeff Bezos
              </p>
              <Divider/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
)

export default HomeContent