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
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
          <Grid.Column textAlign="center" width={16}>
            <Header textAlign='center' as='h3'  style={{ fontSize: '2em' }}>
              OutGrown
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The hootin tootin site for parents to buy, sell or swap outgrown baby goods... blurb blurb something somthing somthing.....
            </p>

          </Grid.Column>
      </Grid>
    </Segment>
)

export default Blurb