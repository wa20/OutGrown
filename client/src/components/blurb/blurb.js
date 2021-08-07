import React from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Placeholder,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from "semantic-ui-react";

const Blurb = () => (
    <Segment centered vertical>
      <Grid centered container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column textAlign="center" width={12}>
            <Header as='h3'  style={{ fontSize: '2em' }}>
              OutGrown
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The hootin tootin site for parents to buy, sell or swap outgrown baby goods... blurb blurb something somthing somthing.....
            </p>
           
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Segment>

)

export default Blurb