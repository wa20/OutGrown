import React from "react";
import "./profilePage.css"

// import Button from '@material-ui/core/Button';

import {
  Button,
  Icon,
  Segment,
} from "semantic-ui-react";


const Listings = () => (
  <div>

    <Segment style={{ padding: '5em 0em' }} vertical textAlign="center">

      <Button animated>
        <Button.Content visible>ADD NEW LISTING</Button.Content>
        <Button.Content href="/list-item" hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>

    </Segment>


  </div>

)

export default Listings



// const panes = [
//   {
//     menuItem: "Profile",
//     render: () => (
//       <Tab.Pane>
//         <Segment style={{ padding: "1em 0em" }} vertical textAlign="center">
//           <Container text>
//             <Header style={{ fontSize: "1.8em" }}>Hi 'user name'</Header>
//             {/* <Container text > */}
//             <p style={{ fontSize: "1.2em" }}>29 Fake Street</p>
//             <p style={{ fontSize: "1.2em" }}>Fake Side City</p>
//             <p style={{ fontSize: "1.2em" }}>FK3 9SD</p>
//             {/* </Container> */}
//           </Container>
//         </Segment>
//       </Tab.Pane>
//     ),
//   },

//   {
//     menuItem: "Edit Profile",
//     render: () => <Tab.Pane >


//     </Tab.Pane>,
//   },
// ];