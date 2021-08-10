
import React, { useEffect, useState } from 'react'
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { UPDATE_USER } from '../../utils/mutations';
import { useQuery } from '@apollo/client'; //
import { QUERY_USER } from '../../utils/queries';
import { useStoreContext } from '../../utils/globalState';

import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Accordion,
  Form,
  Table,
  Tab
} from "semantic-ui-react";




function Profile(props) {

    const [state, dispatch] = useStoreContext();
    const { data } = useQuery(QUERY_USER);

    
  let user;

  if (data) {
    user = data.user;
  }

    // const [usernameState, setUsernameState] = useState(state.user.username);
    // const [firstNameState, setFirstNameState] = useState("");
    // const [lastNameState, setLastNameState] = useState("");
    // const [emailState, setEmailState] = useState("");
    // const [StreetState, setStreetState] = useState("");
    // const [townCityState, setTownCityState] = useState("");
    // const [postCodestate, setPostCodeState] = useState("");





    // const [updateUser] = useMutation(UPDATE_USER);
  
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
    //   const mutationResponse = await updateUser({
    //     variables: {
    //       email: emailState.email,
    //       username: usernameState.username,
    //       firstName: firstNameState.firstName,
    //       lastName: lastNameState.lastName,
    //       street: StreetState.street,
    //       townCity: townCityState.townCity,
    //       postCode: postCodestate.postCode
    
    //     },
    //   });
      
    // };
  
    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   setFormState({
    //     ...formState,
    //     [name]: value,
    //   });
    // };









    const panes = [
      {
        menuItem: "Profile",
        render: () => (
          <Tab.Pane attached={false}>
            <Card fluid>
              <Card.Content header="">
              Hey {user.username}
              </Card.Content>

              <Card.Content>
                <Card.Meta>Delivery Address</Card.Meta>
                {/* <Card.Description>address line 1</Card.Description> */}
                <Card.Description>address line 2</Card.Description>
                <Card.Description>City/Town</Card.Description>
                <Card.Description>Post Code</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="user" /> Username
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail" /> Email
              </Card.Content>
            </Card>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Edit Profile",
        render: () => (
          <Tab.Pane attached={false}>
            <Segment inverted>
              <Form inverted>
                <Form.Group widths="equal">
                  <Form.Input fluid label="User Name" placeholder="First name"/>
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>
                
                <Button type="submit">Submit</Button>
              </Form>
            </Segment>
          </Tab.Pane>
        ),
      },
    ];










return (
  <div>
    <Segment style={{ padding: "5em " }} vertical textAlign="center">
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Segment>
  </div>
);}
export default Profile