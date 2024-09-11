// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <div>
//       <Navbar bg="dark" variant='dark'>
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand><i className='fas fa-laptop'></i><b> Gadget Earth</b></Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <LinkContainer to="/">
//                 <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/cart">
//                 <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/login">
//                 <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/admin">
//                 <Nav.Link><i className='fas fa-user'></i> Admin</Nav.Link>
//               </LinkContainer>
//             </Nav>
            
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <i className='fas fa-laptop'></i><b> Gadget Shodai</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/"><i className='fas fa-home'></i> Home</Nav.Link>
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
              <Nav.Link href="http://127.0.0.1:8000/admin/" target="_blank">
                <i className='fas fa-user'></i> Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
