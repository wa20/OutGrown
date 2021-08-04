import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'

import HomeContent from "../../components/home-content/home-content"
import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"
import RecentlyListed from "../../components/recently-listed/recently-listed"
import Favorites from "../../components/favourites/favourites"
import {
  Button,
  Container,
  Dropdown,
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
  Accordion
} from 'semantic-ui-react'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='outgrown'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: '1.0em',
      }}
    />
    <Button inverted color="red" size='huge'>
      
      <Icon name='shopping bag' /> Shop Now
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Market Place</Menu.Item>
                

                <Dropdown text='Categories' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Header>Newborn</Dropdown.Header>
                    <Dropdown.Item>Toys</Dropdown.Item>
                    <Dropdown.Item>Clothes</Dropdown.Item>
                    <Dropdown.Item>Travel</Dropdown.Item>
                    <Dropdown.Item>Nursery</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Todler</Dropdown.Header>
                    <Dropdown.Item>Toys</Dropdown.Item>
                    <Dropdown.Item>Clothes</Dropdown.Item>
                    <Dropdown.Item>Travel</Dropdown.Item>
                    <Dropdown.Item>Nursery</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* <Menu.Item as='a'>Careers</Menu.Item> */}
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = { }

  //accordian
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeIndex } = this.state

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            // overflow='visible !important'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Marketplace</Menu.Item>

            <Menu.Item>
              Category
              <Accordion as={Menu} inverted vertical>
                <Menu.Item as="a">
                  <Accordion.Title
                    active={activeIndex === 0}
                    // content='Category'
                    index={0}
                    onClick={this.handleClick}
                  />
                  <Accordion.Content active={activeIndex === 0}>
                    <Menu.Header as="a">Newborn</Menu.Header>
                    <Menu.Item as="a">Toys</Menu.Item>
                    <Menu.Item as="a">Clothes</Menu.Item>
                    <Menu.Item as="a">Travel</Menu.Item>
                    <Menu.Item as="a">Nursery</Menu.Item>
                    <Menu.Header as="a">Todler</Menu.Header>
                    <Menu.Item as="a">Toys</Menu.Item>
                    <Menu.Item as="a">Clothes</Menu.Item>
                    <Menu.Item as="a">Travel</Menu.Item>
                    <Menu.Item as="a">Nursery</Menu.Item>
                  </Accordion.Content>
                </Menu.Item>
                {/* <Dropdown text='Categories'  className='link item'>
                      <Dropdown.Menu>
                        <Dropdown.Header>Newborn</Dropdown.Header>
                        <Dropdown.Item>Toys</Dropdown.Item>
                        <Dropdown.Item>Clothes</Dropdown.Item>
                        <Dropdown.Item>Travel</Dropdown.Item>
                        <Dropdown.Item>Nursery</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Todler</Dropdown.Header>
                        <Dropdown.Item>Toys</Dropdown.Item>
                        <Dropdown.Item>Clothes</Dropdown.Item>
                        <Dropdown.Item>Travel</Dropdown.Item>
                        <Dropdown.Item>Nursery</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
              </Accordion>
            </Menu.Item>

            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    {/* <Button as="a" inverted>
                      Log in
                    </Button> */}
                    <Icon name='user' size='large' style={{ marginLeft: "1.0em" }} />
                    
                    <Icon name='shopping bag' size='large' style={{ marginLeft: "0.5em" }} />
                    {/* <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button> */}
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const Home = () => {
  return (
    <div>
      <ResponsiveContainer>

      {/* <Hero /> */}
      <RecentlyListed />
      <HomeContent/> 
      
      <Favorites />
      <Footer />

      </ResponsiveContainer>
    </div>
  );
};

export default Home;