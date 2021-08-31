import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormText,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container
        className="p-5 mb-5 mt-0 justify-content-center ml-0 pl-0"
        style={{ border: "2px dotted", position: "absoulte" }}
      >
        <Form inline>
          <Container>
            <FormText>통합검색</FormText>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Container>
        </Form>
        <br />
        <Card>
          <Card.Header>랭킹 게시글</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <br />
        <Card>
          <Card.Header>이슈</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
            <ListGroup.Item action Link to="/">
              링크
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </>
  );
};

export default Home;
