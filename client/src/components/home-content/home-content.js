
import React from 'react'


import {
  Grid,
  Header,
  Segment,
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
            <p style={{ fontSize: '1.33em' }}>That is the word on the playground benches!</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} className="DP">

            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone anywhere else, I found what I wanted right here at a fraction of the price!!"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
              <b>Parent</b> happy Outgrown Customer
            </p>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


  </div>
)

export default HomeContent