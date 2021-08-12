const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    image: String
    description: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }  

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    street: String
    townCity: String
    postCode: String
    firstName: String
    lastName: String
  }
  

  type Checkout {
    session: ID
  }
  
  type Auth {
    token: ID
    user: User
  }

  input InputUpdate {
    username: String
    email: String
    password: String
    street: String
    townCity: String
    postCode: String
    firstName: String
    lastName: String
  }

  type Query {
    
    user(_id: ID!): User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(userInfo: InputUpdate!): User
    login(email: String!, password: String!): Auth
    updateProduct(_id: ID!): Product
  }
`;

module.exports = typeDefs;
