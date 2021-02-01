import React from "react";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import Button from "../Button/Button";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const StyledInput = styled.input`
  border-radius: 30px;
  padding: 10px 20px;
  border: 1px solid rgba(152, 215, 164, 0.8);
  font-size: 26px;
  margin: 10px 0;
  width: 120%;
`;
const StyledTextarea = styled.textarea`
  resize: none;
  width: 120%;
  border-radius: 30px;
  padding: 10px 20px;
  border: 1px solid rgba(152, 215, 164, 0.8);
  height: 200px;
  margin-bottom: 16px;
  font-size: 26px;
`;
const required = (value) => {
  const req = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return req ? null : "Wpisz poparwy e-mail ";
};

export default function Formularz({ onStart }) {
  return (
    <div>
      <Form
        onSubmit={onStart}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          reset,
        }) => (
          <form
            onSubmit={(event) => {
              handleSubmit(event).then(reset);
            }}
          >
            <Field name="imie">
              {({ input, meta }) => (
                <div>
                  <StyledInput {...input} type="text" placeholder="Imię" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="nazwisko">
              {({ input, meta }) => (
                <div>
                  <StyledInput {...input} type="text" placeholder="Nazwisko" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="numer">
              {({ input, meta }) => (
                <div>
                  <StyledInput
                    {...input}
                    type="number"
                    placeholder="Numer Kontaktowy"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div>
                  <StyledInput {...input} type="e-mail" placeholder="E-mail" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="message">
              {({ input, meta }) => (
                <div>
                  <StyledTextarea
                    {...input}
                    placeholder="Wpisz treść wiadomości"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <Button type="submit" disabled={submitting}>
                Wyślij wiadomość
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}