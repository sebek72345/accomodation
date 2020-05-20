import React, { useState } from "react";
import Form from "../components/Form/Form";
import styled from "styled-components";
import sketch from "../images/sketch.jpg";
import Maps from "../components/Map/Map";
import Icons from "../components/Icons/Icons";

const StyledWrapper = styled.div`
  background: url(${sketch}) bottom left no-repeat;
  background-size: 600px;
  display: flex;
  justify-content: space-evenly;
  font-family: "Oswald", sans-serif;
`;
const StyledParagraph = styled.p`
  font-size: 36px;
`;
const ExternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Contact() {
  const [emailSend, handleEmailSend] = useState(null);
  const [disabled, handleDisabled] = useState(false);

  const handleSubmit = (values) => {};
  return (
    <ExternalWrapper>
      <StyledWrapper>
        <div>
          <StyledParagraph>Masz do nas jakieś pytania ?</StyledParagraph>
          <p>
            W formularzu kontaktyowym prosimy podać dokładną ilość osób <br />
            oraz termin przyjazdu i wyjazdu. Dziękujemy
          </p>
          <Icons />
        </div>
        <div>
          <Form onStart={handleSubmit} />
          {emailSend && disabled ? (
            <p className="d-inline success-msg">Email Sent</p>
          ) : null}
        </div>
      </StyledWrapper>
      <Maps />
    </ExternalWrapper>
  );
}
