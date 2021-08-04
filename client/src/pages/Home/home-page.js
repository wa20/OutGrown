import React from "react";
import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"
import RecentlyListed from "../../components/recently-listed/recently-listed"
import Favorites from "../../components/favourites/favourites"
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
} from 'semantic-ui-react'

const Home = () => {
    return (
      <div>
      <div className="container">
          <Hero />
          {/* <Divider /> */}
          <div>
          
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
          {/* <Divider /> */}

          <Favorites />
          {/* <Divider /> */}

         

          </div>
          
      </div>
<Footer />
</div>
    );
  };

export default Home;