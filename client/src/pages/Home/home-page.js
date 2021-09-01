import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import HomeContent from "../../components/home-content/home-content"
import Footer from "../../components/footer/footer"
// import Nav from "../../components/navbar/navbar"
import Blurb from "../../components/blurb/blurb"
import "../../index.css"


import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Sidebar,
  Visibility,
  Grid,
} from 'semantic-ui-react'
import CarouselFavorites from '../../components/carousel-favorites/carousel-favorites'
import CarouselCategories from '../../components/carousel-categories/carousel-categories'
// import CarouselProd from '../../components/our-favourites/our-favourites'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <Container text className="buttonPosition">
    <Header
      as='h1'
      content=''
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        paddingTop: 30,
        // color: "black"
      }}
    />
    <Header
      as='h2'
      content=''
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: '12.0em',
        // color: "black"
      }}
    />
    <Button inverted color="red" size='huge' href="/marketplace" >

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
          className="headerBanner"
        >
          <Segment
            // inverted
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
  state = {}

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
      <Media as={Sidebar.Pushable} at="mobile" >
         
        <Segment
          inverted
          
          textAlign="center"
          style={{ minHeight: 350, padding: "1em 0em", background:""}}
          
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
      <ResponsiveContainer >
        {/* <Nav /> */}
        <div>
        <Blurb />
        
        {/* <Container style={{width:"100vw"}}> */}
        <Grid stackable columns={2} style={{ padding: '3em 0em' }} vertical className="DPP">
          <Grid.Column centered width={8}>
            <CarouselFavorites />
          </Grid.Column>
          <Grid.Column centered width={8}>
            <CarouselCategories />
          </Grid.Column>
        </Grid>  
        {/* </Container> */}
        
        <HomeContent />
        <Footer />
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Home;