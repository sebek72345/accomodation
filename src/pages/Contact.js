import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "../components/Form/Form";
import styled from "styled-components";
import sketch from "../images/sketch.jpg";
import Maps from "../components/Map/Map";
import Icons from "../components/Icons/Icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StyledWrapper = styled.div`
  background-size: 600px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  font-family: "Oswald", sans-serif;
  width: 80%;
  margin: 0 auto;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const StyledParagraph = styled.p`
  font-size: 36px;
  text-align: center;
`;
const ExternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    width: 100%;
    margin-left: 20px;
  }
`;
const SuccessEmail = styled.p`
  font-size: 18px;
  color: #22bb33;
`;

export default function Contact() {
  const [emailSend, handleEmailSend] = useState(null);

  const handleSubmit = (values) => {
    axios
      .post(
        "https://us-central1-noclegi-276309.cloudfunctions.net/sendEmail",
        values
      )
      .then((res) => {
        handleEmailSend(true);
        toast.success("Email został wysłany, wkrótce na niego odpowiemy !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          document.location.href = "/";
        }, 4000);
      })
      .catch((err) => {
        handleEmailSend(false);
      });
  };
  return (
    <ExternalWrapper>
      <StyledWrapper>
        <div>
          <StyledParagraph>Masz do nas jakieś pytania ? </StyledParagraph>
          <StyledParagraph style={{ fontSize: "16px" }}>
            W formularzu kontaktyowym prosimy podać dokładną ilość osób <br />
            oraz termin przyjazdu i wyjazdu. Dziękujemy
          </StyledParagraph>
          <Icons />
        </div>
        <FormWrapper>
          <Form send={handleSubmit} isSend={emailSend} />
          {emailSend ? <ToastContainer /> : null}
        </FormWrapper>
      </StyledWrapper>
      <Maps />
    </ExternalWrapper>
  );
}
