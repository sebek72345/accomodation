import React from "react";
import { render, get } from "react-dom";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import Button from "../Button/Button";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const StyledInput = styled.input`
  border-radius: 30px;
  padding: 10px 20px;
  border: 1px solid rgba(152, 215, 164, 0.8);
  font-size: 26px;
  margin: 10px 0;
  width: 100%;
`;
const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
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

export default function Formularz({ send }) {
  return (
    <div>
      <Form
        onSubmit={send}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form
            onSubmit={(event) => {
              const promise = handleSubmit(event);
              promise &&
                promise.then(() => {
                  window.location.reload(false);
                });
              return promise;
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
                  {meta.error && meta.touched && (
                    <span style={{ color: "red" }}>{meta.error}</span>
                  )}
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
