
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";



function NavBar() {
  return (
    <>

      <div className=' sticky-top '>

        <Navbar expand="lg" style={{ backgroundColor: "white" }} >
          <Container fluid>
            <Navbar.Brand href="/Home"><Image src="/images/navlogo4.png" fluid style={{ width: "80px", height: "25px" }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}

                navbarScroll
              >
                <Nav.Link href="#">catagories</Nav.Link>
                <Nav.Link href="/home2">gift with boat</Nav.Link>


              </Nav>

              <Nav className="justify-content-end" activeKey="/home">
                <div className='m-1'>
                  <input type="text " placeholder='Search' style={{ width: "280px", height: "40px", borderRadius: '50px', textAlign: 'center' }} />
                </div>
                <div>

                  <Nav.Link href="#">
                    <h4 className=''> <FaShoppingCart />
                    </h4>
                  </Nav.Link>
                </div>
                <div>

                  <Nav.Link href="/LoginHome"><h4 className=''><VscAccount/>
                    </h4></Nav.Link>

                </div>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>





    </>
  )
}
export default NavBar
