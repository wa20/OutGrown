import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'
import './style.css';

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable borderless size='huge'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='marketplace'
          active={activeItem === 'marketplace'}
          onClick={this.handleItemClick}
        >
          Marketplace
        </Menu.Item>

        <Menu.Item
          name='categories'
          active={activeItem === 'categories'}
          onClick={this.handleItemClick}
        >
          Categories
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item>
                <img src={Logo} alt ="logo"/>
            </Menu.Item>
        </Menu.Menu>
        

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