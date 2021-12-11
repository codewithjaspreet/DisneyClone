import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTAlogoone src="/images/cta-logo-one.svg"></CTAlogoone>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          <p>
            a statement or account giving the characteristics of someone or
            something : a descriptive statement or account The review was little
            more than a description
          </p>
        </Description>
        <CTAlogotwo src="/images/cta-logo-two.png"></CTAlogotwo>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  height: calc(100vh-70px);
  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
`;

const CTAlogoone = styled.img``;

const SignUp = styled.div`
  width: 100%;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  transition: all 250ms;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  background-color: #0063e5;
  font-weight: bold;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  
font-size : 11px;
text-align:center;
line-height:1.5;
letter-spacing 1.5px;
`;
const CTAlogotwo = styled.img``;
