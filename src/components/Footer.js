import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineMail,AiFillGithub,AiFillTwitterCircle ,AiFillLinkedin} from "react-icons/ai";

function Footer() {
    return(
        <footer> 
            <Container style={{backgroundColor:"black"}} fluid={true}>
                <Row className="border-top-2 d-flex justify-content-between">
                    <Col className="p-3 d-flex justify-content-center">
                        <a href="https://github.com/leenathomas "><AiFillGithub size={30} color="gray"/></a>
                        <a href="https://twitter.com/leenathomas1996"><AiFillTwitterCircle size={30} color="gray"></AiFillTwitterCircle></a>
                        <a href="https://www.linkedin.com/in/leena-thomas-888b9a119/"><AiFillLinkedin size={30} color="gray"></AiFillLinkedin></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;