/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import Link from '../Link'
import {Navbar,NavDropdown,Nav,NavItem,MenuItem} from 'react-bootstrap'


function Footer(){
  return (
    <Navbar fixedBottom >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
        <Nav>
          <Link to="/about">Link</Link>
          <NavItem eventKey={2} href="#">Link</NavItem>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
    </Navbar>
  )
}

export default Footer
