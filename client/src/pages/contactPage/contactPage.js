import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import Footer from "../../components/footer/footer"
import ContactForm from "../../components/contactForm/contactForm"
import {
  Container,
  Header,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


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


const ContactUs = () => {
  return (
    <div>
      <ResponsiveContainer>
        {/* <Nav /> */}

        <Container textAlign="center" style={{ paddingTop: "6em",  width: "100vw"}} >
      <h2>Contact Us</h2>
        </Container>
        
        
        <ContactForm/>
     

        <Footer />
      </ResponsiveContainer>
    </div>
  );
};

export default ContactUs;