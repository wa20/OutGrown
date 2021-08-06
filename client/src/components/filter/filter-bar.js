// import React, { Component } from 'react'
// import { Container } from 'semantic-ui-react'

// export default function Filterbar() {
//   return (
//     <Container style={{ padding: '1em 0em' }}>
    
//     </Container>
//   );
// }


import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Filterbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ padding: '0em 0em' }} >
        <Menu.Item
        position='right'
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Filter
        </Menu.Item>

        <Menu.Item
        
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          <b>Sort By</b>
        </Menu.Item>

      </Menu>
    )
  }
}