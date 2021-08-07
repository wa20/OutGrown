import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import Logo from '../../assets/outgrownLogo.png'
import HomeContent from "../../components/home-content/home-content"
import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"
import Nav from "../../components/navbar/navbar"
import RecentlyListed from "../../components/recently-listed/recently-listed"
import CarouselBanner from "../../components/banners/carousel-banner"
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
import Carousel from '../../components/carousel-favorites/carousel-favorites'
// import CarouselProd from '../../components/our-favourites/our-favourites'


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
      content='Outgrown'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        paddingTop: 30
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

            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <HomepageHeading mobile />
            </Segment>

            {children}

        
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
      <Nav/>
      
      {/* <Hero /> */}
      <RecentlyListed />
      <HomeContent/> 
      <Carousel />
      {/* <Favorites /> */}
      {/* <CarouselProd/> */}
      {/* <CarouselBanner/> */}
      <Footer />

      </ResponsiveContainer>
    </div>
  );
};

export default Home;