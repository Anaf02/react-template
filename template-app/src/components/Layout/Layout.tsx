import { Col, Container, Row } from "react-bootstrap";
import AppNavbar from "../Navbar/Navbar";

interface Props {
  children: JSX.Element;
}

function Layout(props: Props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>App Name</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <AppNavbar></AppNavbar>
          </Col>
        </Row>
        <Row>
          <Col> {props.children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
