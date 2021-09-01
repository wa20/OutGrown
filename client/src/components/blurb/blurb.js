import React from 'react'
import {
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import "./blurb.css"

const Blurb = () => (
  <Segment style={{ padding: '5em 0em', width: "100vw", background: ""}} vertical inverted >
    <Grid container stackable verticalAlign='middle'  >
      <Grid.Column textAlign="center" width={16}>
        <Header textAlign='center' as='h3' style={{ fontSize: '3.5em' }} inverted> 
          OutGrown
        </Header>
        <p style={{ fontSize: '2.0em' }}>
          The only site parents need! Buy, Sell, Swap all your <b>OutGrown</b> things. From Toys to Cribs. Find it on Outgrown!
        </p>

      </Grid.Column>
    </Grid>
  </Segment>
)

export default Blurb