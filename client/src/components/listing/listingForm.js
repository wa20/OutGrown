import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import {
  // Button,
  Container,
  // Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Input,
  Form,
  TextArea,
  Select,
  Checkbox,
  Radio,
} from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const condition = [
  { text: "New - Boxed", value: "New - Boxed" },
  { text: "Used - Like New", value: "Used - Like New" },
  { text: "Used - Very Good", value: "Used - Very Good" },
  { text: "Used - Good", value: "Used - Good" },
  { text: "Used - Acceptable", value: "Used - Acceptable" },
];

const category = [
  { text: "Toys", value: "Toys" },
  { text: "Clothes", value: "Clothes" },
  { text: "Travel", value: "Travel" },
  { text: "Nursery", value: "Nursery" },
];

const parentCategory = [
  { text: "Infant", value: "Infant" },
  { text: "Toddler", value: "Toddler" },
];

export default function ListingForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Segment style={{ padding: "2em 3em" }} vertical textAlign="center">
        <Grid.Row centered>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="medium"
            rounded
            centered
          />
        </Grid.Row>
        <Grid.Row centered style={{ padding: "2em 3em" }}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
        </Grid.Row>
      </Segment>

      <Segment style={{ padding: "2em 3em" }} vertical textAlign="center">
        <Grid.Row centered>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-product-name"
                control={Input}
                label="Product Name"
                placeholder="Product Name"
              />
              <Form.Field
                control={Select}
                options={parentCategory}
                label={{
                  children: "Parent Category",
                  htmlFor: "form-select-control-parentCategory",
                }}
                placeholder="Parent Category"
                search
                searchInput={{ id: "form-select-control-parentCategory" }}
              />
              <Form.Field
                control={Select}
                options={category}
                label={{
                  children: "Category",
                  htmlFor: "form-select-control-Category",
                }}
                placeholder="Category"
                search
                searchInput={{ id: "form-select-control-Category" }}
              />
            </Form.Group>
            {/* --------------------------------------------------- */}
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-price"
                control={Input}
                label="Price"
                placeholder="Price"
              />
              <Form.Field
                id="form-input-control-last-postage"
                control={Input}
                label="Postage"
                placeholder="Postage"
              />
              <Form.Field
                control={Select}
                options={condition}
                label={{
                  children: "Product Conditon",
                  htmlFor: "form-select-control-condition",
                }}
                placeholder="Product Condition"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>

            {/* --------------------------------------------------- */}

            <Form.Field
              id="form-textarea-control-description"
              control={TextArea}
              label="Description"
              placeholder="Product Description"
            />
          </Form>
        </Grid.Row>
        <Form.Field style={{ padding: "2em 3em" }}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            submit
          </Button>
        </Form.Field>
      </Segment>
    </div>
  );
}

// const [name, setName] = useState();
// const [file, setFile] = useState()

// onChange={e => {
//     const { value } = e.target
// }}
