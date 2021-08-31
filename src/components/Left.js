import React from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Space = styled(Container)`
  padding: 1% 0;
`;

const Left = () => {
  return (
    <>
      <Container
        className="pt-5 mb-3 align-center flex-column ml-3"
        style={{ border: "2px dotted", width: "200px" }}
      >
        <Card>
          <Link to="/login" className="btn btn-primary mb-3 mt-3">
            로그인
          </Link>
          <div className="mb-3 d-flex">
            <Link to="/" className="btn btn-dark btn-sm">
              회원가입
            </Link>
            <Link to="/" className="btn btn-dark btn-sm">
              ID/PW 찾기
            </Link>
          </div>
        </Card>
        <Card className="mb-3 text-center">
          <h5 className="border-bottom">마지막 접속링크</h5>
          <Link to="/" className="border-bottom">
            링크
          </Link>
          <Link to="/" className="border-bottom">
            링크
          </Link>
          <Link to="/" className="border-bottom">
            링크
          </Link>
          <Link to="/" className="border-bottom">
            링크
          </Link>
          <Link to="/" className="border-bottom">
            링크
          </Link>
        </Card>
        <ListGroup className="mb-3 mt-3">
          <h5>()분야 주간랭킹</h5>
          <ListGroup.Item action Link to="/">
            <img
              src="/pica.png"
              width="20"
              height="20"
              className="d-inline-block"
              alt="pica"
            />
            프로필
          </ListGroup.Item>
          <ListGroup.Item action Link to="/">
            <img
              src="/pica.png"
              width="20"
              height="20"
              className="d-inline-block"
              alt="pica"
            />
            프로필
          </ListGroup.Item>
          <ListGroup.Item action Link to="/">
            <img
              src="/pica.png"
              width="20"
              height="20"
              className="d-inline-block"
              alt="pica"
            />
            프로필
          </ListGroup.Item>
          <ListGroup.Item action Link to="/">
            <img
              src="/pica.png"
              width="20"
              height="20"
              className="d-inline-block"
              alt="pica"
            />
            프로필
          </ListGroup.Item>

          <ListGroup.Item action Link to="/">
            <img
              src="/pica.png"
              width="20"
              height="20"
              className="d-inline-block"
              alt="pica"
            />
            프로필
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default Left;
