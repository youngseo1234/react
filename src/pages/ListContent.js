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

const ListContent = () => {
  return (
    <>
      <Container className="pt-5 mb-3">
        <Form inline>
          <Container>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Container>
        </Form>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>제목</Card.Title>
            <Card.Text>내용내용내용내용내용</Card.Text>
            <Link to="/" className="btn btn-primary">
              내용보기
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>제목</Card.Title>
            <Card.Text>내용내용내용</Card.Text>
            <Link to="/" className="btn btn-primary">
              내용보기
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>제목</Card.Title>
            <Card.Text>내용내용내용</Card.Text>
            <Link to="/" className="btn btn-primary">
              내용보기
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>제목</Card.Title>
            <Card.Text>내용내용내용</Card.Text>
            <Link to="/" className="btn btn-primary">
              내용보기
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default ListContent;
