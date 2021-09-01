import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import Footer from "../../components/footer/footer"
// import Nav from "../../components/navbar/navbar"
import Profile from "../../components/profilePage/profile"
import Listings from "../../components/profilePage/listings"
import PurchaseHistory from "../../components/profilePage/purchaseHistory"
import {
  Container,
  Header,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ViewOrderHistory from '../../components/profilePage/viewOrderHistory'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h2'
//       content='Profile'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//         paddingTop: 30
//       }}
//     />
//   </Container>
// )

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

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
          {/* <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 150, padding: '0.5em 0em' }}
            vertical
          > */}
            {/* <HomepageHeading /> */}
          {/* </Segment> */}
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

        {/* <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 180, padding: "1em 0em" }}
          vertical
        >
          <HomepageHeading mobile />
        </Segment> */}

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


const ProfilePage = () => {
  return (
    <div>
      <ResponsiveContainer>
        {/* <Nav /> */}

        <Container textAlign="center" style={{ padding: "2em 0em",  width: "100vw"}} >
      <h2>Profile</h2>
        </Container>
        <Profile />
        <PurchaseHistory />
        <Listings />
        <ViewOrderHistory />

        <Footer />
      </ResponsiveContainer>
    </div>
  );
};

export default ProfilePage;