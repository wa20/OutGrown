import React, { Component } from 'react'
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'
import './style.css';

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable size='tiny'>
        <Menu.Item
            name='logo'
            active={activeItem === 'logo'}
        >
            <Image src={Logo} alt ="logo" size='tiny'/>
        </Menu.Item>
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

        <Dropdown text='Categories' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>
                    <Dropdown text='Clothing'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Boys</Dropdown.Header>
                                <Dropdown.Item>All-in-Ones & Bodysuits</Dropdown.Item>
                                <Dropdown.Item>Bibs</Dropdown.Item>
                                <Dropdown.Item>Headware</Dropdown.Item>
                                <Dropdown.Item>Jackets & Coats</Dropdown.Item>
                                <Dropdown.Item>Jumpers & Knitware</Dropdown.Item>
                                <Dropdown.Item>Pramsuit</Dropdown.Item>
                                <Dropdown.Item>Pyjamas & Knightware</Dropdown.Item>
                                <Dropdown.Item>Footwear</Dropdown.Item>
                                <Dropdown.Item>Shorts</Dropdown.Item>
                                <Dropdown.Item>Swimwear</Dropdown.Item>
                                <Dropdown.Item>Tops & Shirts</Dropdown.Item>
                                <Dropdown.Item>Trousers</Dropdown.Item>
                                <Dropdown.Divider />
                            <Dropdown.Header>Girls</Dropdown.Header>
                                <Dropdown.Item>All-in-Ones & Bodysuits</Dropdown.Item>
                                <Dropdown.Item>Bibs</Dropdown.Item>
                                <Dropdown.Item>Dresses & Skirts</Dropdown.Item>
                                <Dropdown.Item>Jackets & Coats</Dropdown.Item>
                                <Dropdown.Item>Jumpers/Knitware</Dropdown.Item>
                                <Dropdown.Item>Knickers</Dropdown.Item>
                                <Dropdown.Item>Pyjamas & Knightware</Dropdown.Item>
                                <Dropdown.Item>Footwear</Dropdown.Item>
                                <Dropdown.Item>Shorts</Dropdown.Item>
                                <Dropdown.Item>Swimwear</Dropdown.Item>
                                <Dropdown.Item>Tops & Shirts</Dropdown.Item>
                                <Dropdown.Item>Trousers</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>Pushchairs</Dropdown.Item>
                <Dropdown.Item>Nursery</Dropdown.Item>
                <Dropdown.Item>Car Seats</Dropdown.Item>
                <Dropdown.Item>Bathing & Changing</Dropdown.Item>
                <Dropdown.Item>Baby Safety</Dropdown.Item>
                <Dropdown.Item>Feeding & Weaning</Dropdown.Item>
                <Dropdown.Item>Toys & Gifts</Dropdown.Item>
                <Dropdown.Item>Furniture</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
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