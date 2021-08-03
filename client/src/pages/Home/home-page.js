import React from "react";
import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"
import RecentlyListed from "../../components/recently-listed/recently-listed"
import Favorites from "../../components/favourites/favourites"
import { Divider, Grid, Placeholder } from 'semantic-ui-react'

const Home = () => {
    return (
      <div className="container">
          <Hero />
          <Divider />
          <div>
          <RecentlyListed />
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

          <Favorites />
          <Divider />

          <Footer />

          </div>
      </div>
    );
  };

export default Home;