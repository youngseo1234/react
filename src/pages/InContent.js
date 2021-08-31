import { useEffect, useState } from "react";
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
import styled, { css } from "styled-components";

const Space = styled(Container)`
  padding: 1% 0;
`;

const InContent = () => {
  const [books, setBooks] = useState([]);

  //함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행
  useEffect(() => {
    fetch("http://localhost:8080/inContent")
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      }); //비동기 함수
  }, []); // 2번째 인자로 빈 배열이 아무 의존성을 없게하려고.

  return (
    <>
      <Container className="pt-5 mb-3">
        <Container>
          <Space />
          <Link to="/" className="text-dark h1">
            질문 게시글 링크
          </Link>
          <Space />
          <Card>
            <Card.Body className="border">내용내용내용내용</Card.Body>
          </Card>
          <Space />
          <Card>
            <Card.Body className="border">내용내용내용내용</Card.Body>
          </Card>
          <Space />
          <Button>댓글쓰기</Button>
          <Space />
        </Container>
        <Container>
          <h2>답변 </h2>
          <Space />
          <Card>
            <Card.Body className="border">내용내용내용내용</Card.Body>
          </Card>
          <Space />
          <Card>
            <Card.Body className="border">내용내용내용내용</Card.Body>
          </Card>
          <Space />
          <Button>댓글쓰기</Button>
          <Space />
          <h2>답변하기</h2>
          <Space />
          <Form>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="답변하기"
              className="mr-sm-2"
            />
          </Form>
          <Space />
          <Button>답변 등록</Button>
          <Space />
        </Container>
      </Container>
    </>
  );
};
export default InContent;
