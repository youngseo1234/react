import {
  Button,
  Card,
  CardColumns,
  CardGroup,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const InContent = () => {
  return (
    <>
      <Container className="pt-5 mb-3">
        <Form>
          <Form.Label>제목</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form>
      </Container>
    </>
  );
};
export default InContent;
