import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable size='mini'>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='marketplace'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Marketplace
        </Menu.Item>

        <Menu.Item
          name='categories'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Categories
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>

          <Menu.Item>
            <Button>Sign In</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}