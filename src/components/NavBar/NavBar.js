/* بسم الله الرحمن الرحيم */

import {Container, Form, Nav, Navbar} from "react-bootstrap";
import "./NavBar.css";

function NavBar({searchValue,setSearchValue, handleClick}) {


    return(
        <Navbar expand="lg"  className="bg-dark" variant="dark">
            <Container >
                <Navbar.Brand href="#">
                    <div className="logo">مطعم جديد</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
                    <Form className="d-flex" onSubmit={(e) => handleClick(e, searchValue)}>
                        <Form.Control
                            type="text"
                            placeholder="بحث.."
                            className="mx-3"
                            aria-label="Search"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        <button type="submit" className="btn-style px-2">ابحث</button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

/* الحمد لله رب العالمين */