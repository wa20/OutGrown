
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
import "./home-content.css"



const HomeContent = () => (
    <div>

<Segment style={{ paddingTop: '1em', paddingBottom: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} className="DP">
            
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    </div>
)

export default HomeContent