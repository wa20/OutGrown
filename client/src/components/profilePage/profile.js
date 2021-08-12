import React, { useEffect, useState } from 'react'
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { UPDATE_USER } from '../../utils/mutations';
import { useQuery } from '@apollo/client';
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
import auth from '../../utils/auth';


//Set the states, on change update them, on submit run the mutation with the values in state

function Profile({ _id }) {
  const userId = auth.getUserId()
  const [state, dispatch] = useStoreContext();
  const { data, loading } = useQuery(QUERY_USER, {
    variables: { _id: userId },
  });

  console.log(userId);
  console.log("Data", data);
  let user;
  if (data) {
    user = data.user;

  }

  const [usernameState, setUsernameState] = useState("");
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [StreetState, setStreetState] = useState("");
  const [townCityState, setTownCityState] = useState("");
  const [postCodestate, setPostCodeState] = useState("");

  const handleUsernameChange = (event) => {
    setUsernameState(event.target.value);
    console.log(usernameState)
  };

  const handleFirstNameChange = (event) => {
    setFirstNameState(event.target.value);
    console.log(firstNameState)
  };

  const handleLastNameChange = (event) => {
    setLastNameState(event.target.value);
    console.log(lastNameState)
  };

  const handleEmailChange = (event) => {
    setEmailState(event.target.value);
    console.log(emailState)
  };

  const handleStreetChange = (event) => {
    setStreetState(event.target.value);
    console.log(StreetState)

  };

  const handleTownCityChange = (event) => {
    setTownCityState(event.target.value);
    console.log(townCityState)
  };

  const handlePostCodeChange = (event) => {
    setPostCodeState(event.target.value);
    console.log(postCodestate)
  };

  const [updateUser, { error }] = useMutation(UPDATE_USER);
  console.log(error);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {
          userInfo: {
            email: emailState.email,
            username: usernameState.username,
            firstName: firstNameState.firstName,
            lastName: lastNameState.lastName,
            street: StreetState.street,
            townCity: townCityState.townCity,
            postCode: postCodestate.postCode
          }
        },
      });
      localStorage.setItem("log", JSON.stringify(data))
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  
  const panes = [
    {
      menuItem: "Profile",
      render: () => (
        <Tab.Pane attached={false}>
          <Card fluid>
            <Card.Content header="">
              Hey 
              {/* {user.username ? user.username : 'first name'}  */}
             
            </Card.Content>

            <Card.Content>
              <Card.Meta>Delivery Address</Card.Meta>
              {/* <Card.Description>address line 1</Card.Description> */}
              <Card.Description>
                {/* {user.street} */}
                </Card.Description>
              <Card.Description>
                {/* {user.townCity} */}
                </Card.Description>
              <Card.Description>
                {/* {user.postCode} */}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" /> 
              {/* {user.username} */}
            </Card.Content>
            <Card.Content extra>
              <Icon name="mail" /> 
              {/* {user.email ? user.email : 'email'} */}
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
            <Grid.Row centered>
              <Form inverted onSubmit={handleFormSubmit}>
                {/* <Form.Group widths="equal"> */}
                <Form.Group unstackable widths={2}>
                <Form.Input fluid label="First Name" placeholder="First name" onChange={handleFirstNameChange} />
                  <Form.Input fluid label="Last name" placeholder="Last name" onChange={handleLastNameChange} />
                  </Form.Group>

                  <Form.Group widths={2}>
                  <Form.Input fluid label="postcode" placeholder="postcode" onChange={handlePostCodeChange} />
                  <Form.Input fluid label="Street" placeholder="Street" onChange={handleStreetChange} />
                  <Form.Input fluid label="town city" placeholder="town city" onChange={handleTownCityChange} />
                  </Form.Group>

                  <Form.Group widths={2}>
                  <Form.Input fluid label="User Name" placeholder="First name" onChange={handleUsernameChange} />
                  <Form.Input fluid label="email" placeholder="email" onChange={handleEmailChange} />
                  </Form.Group>

                {/* </Form.Group> */}
                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Row>
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
  );
}
export default Profile