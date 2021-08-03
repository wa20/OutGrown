import React from "react";
import Hero from "../../components/hero/hero"
import { Container, Divider, Button, Header, Grid, Placeholder, Card } from 'semantic-ui-react'

const Home = () => {
    return (
      <div className="container">
          <Hero />
          <Divider />
          <div>
          <Container text textAlign="center">
            <Header as="h1">Recently Listed</Header>
              <Card.Group itemsPerRow={3}>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                    <Button primary size="tiny">See More</Button>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                    <Button primary size="tiny">See More</Button>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                    <Button primary size="tiny">See More</Button>
                  </Card.Content>
                </Card>
              </Card.Group>
          </Container>
          <Divider />
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
              <Placeholder style={{ height: 150 }}>
                <Placeholder.Image />
              </Placeholder>
              </Grid.Column>
              <Grid.Column>
              <Placeholder style={{ height: 150 }}>
                <Placeholder.Paragraph />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
              </Placeholder>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Container text textAlign="center">
            <Header as="h1">Our Favorites</Header>
              <Card.Group itemsPerRow={3}>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                    <Button primary size="tiny">See More</Button>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                    <Button primary size="tiny">See More</Button>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                    <Button primary size="tiny">See More</Button>
                  </Card.Content>
                </Card>
              </Card.Group>
          </Container>
          <Divider />
          <Grid divided='vertically'>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Placeholder style={{ height: 150 }}>
                  <Placeholder.Paragraph />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>
              </Grid.Column>
              <Grid.Column>
                <Placeholder style={{ height: 150 }}>
                  <Placeholder.Paragraph />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>
              </Grid.Column>
              <Grid.Column>
                <Placeholder style={{ height: 150 }}>
                  <Placeholder.Paragraph />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          

          </div>
      </div>
    );
  };

export default Home;