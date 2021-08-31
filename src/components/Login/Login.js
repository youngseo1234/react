import React, { useEffect, useState } from "react";
import KakaoLogin from "react-kakao-login";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { Button, Card, Container, Form, Nav, Navbar } from "react-bootstrap";
import NaverLogin from "@dohyeon/react-naver-login";

const Login = () => {
  return (
    <div
      className="flex-center"
      style={{
        width: "400px",
        border: "2px dotted",
      }}
    >
      <Card className="flex-column mt-5 pt-3 pb-5 pl-5 pr-5 ">
        <Form>
          <Form.Group className="mb-3 mt-0" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="아이디/비번 저장" />
          </Form.Group>
          <Button className="mb-3 mr-5" variant="primary" type="submit">
            로그인
          </Button>
          <Button className="mb-3" variant="primary" type="submit">
            회원가입
          </Button>
        </Form>
        <KakaoLogin
          token={"b0d9e755e14c2bac99d039f5c2b762da"}
          buttonText="KaKao"
          onSuccess={console.log}
          onFail={console.error}
          onLogout={console.info}
        />
        <FacebookLogin
          appId="312921670608932"
          onSuccess={console.log}
          onFail={console.error}
          onProfileSuccess={console.info}
        />
        <GoogleLogin
          clientId="813630980718-0vv5a1o54p3e66mgu8buvrp52b1dmd27.apps.googleusercontent.com"
          buttonText="구글로그인"
          onSuccess={console.log}
          onFailure={console.error}
        />
        <NaverLogin
          clientId="dkl6a85hCN_N5S1I67cG"
          callbackUrl="http://localhost:3000"
          isPopup={true}
          callbackHandle={false}
          loginButton={{ color: "green", type: 3, height: 45 }}
        />
      </Card>
    </div>
  );
};

export default Login;
