/* eslint-disable no-alert */
import React, { useEffect, useState, FC } from "react";
import Container from "@mui/material/Container";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import colors from "../../theme/colors";
import {
  localStorageKeys,
  saveDataInLocalStorage,
} from "../../utils/localStorage";
import { detectIsAPIkeyValid } from "../../api/api";
import { KeyboardEvent } from "../../interfaces/keyboardInterface";
import { API_KEY, EMAIL_ADDRESS, ENTER_API, ENTER_EMAIL, INVAILD_API, INVALID_EMAIL, LOGIN, NEW_USER, ENTER_DETAILS } from "../../typeConstants";
import { registerBaseUrl } from "../../api/baseurl";

export interface LoginProps {
  authenticate: () => void
}

const CustomContainer = styled(Container)(() => ({
  color: colors.black,
  padding: "3rem 5rem",
  marginTop: '5rem',
  boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.3)",
  "@media (maxWidth:600px)": {
    boxShadow: 'none',
    padding: "3rem 1rem",
  },
}));

const CustomFormControl = styled(FormControl)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
const CustomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const CustomInput = styled(TextField)(() => ({
  width: "100%",
  minWidth: "18rem",
  margin: "0.5rem 0",
  color: colors.darkGray,
  input: {
    color: colors.black,
    "&::placeholder": {
      textOverflow: "ellipsis",
      color: colors.black,

    },
  },
}));

const Form: FC<LoginProps> = ({ authenticate }) => {
  const [email, setEmail] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const navigate = useNavigate();

  const EmailonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const ApionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  });

  const handleSubmit = async () => {
    if (email && apiKey) {
      saveDataInLocalStorage(localStorageKeys.login, { email, apiKey });
      const result = await detectIsAPIkeyValid(apiKey);
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
        if (result.status === "ok") {
          authenticate();
         setEmail("");
         setApiKey("");
          navigate("/main");
        } else {
          alert(INVAILD_API);
        }
      } else {
        alert(INVALID_EMAIL);
      }
    } else {
      alert(ENTER_DETAILS);
    }
  };

  return (
    <CustomContainer maxWidth='sm'>
      <Typography align='center' variant='h5' mb='1rem' sx={{
        fontWeight: 900, textTransform: "uppercase",
      }}>
        {LOGIN}
      </Typography>
      <CustomFormControl>
        <CustomInput
          id='outlined-basic'
          defaultValue={email}
          autoComplete='off'
          type='email'
          label={EMAIL_ADDRESS}
          variant='outlined'
          placeholder={ENTER_EMAIL}
          onChange={EmailonChange}
        />
        <CustomInput
          id='outlined-basic'
          defaultValue={apiKey}
          autoComplete='off'
          type='text'
          label={API_KEY}
          variant='outlined'
          placeholder={ENTER_API}
          onChange={ApionChange}
        />
      </CustomFormControl>
      <Typography variant='body1' align='right' sx={{ mt: "1rem" }}>
        {NEW_USER}
        <a
          href={`${registerBaseUrl}`}
          target='_blank'
          rel='noreferrer'
          style={{
            textDecoration: "none", fontWeight: 900, textTransform: "uppercase",
            color: colors.darkPrimary,
          }}
        >{' '}
          {API_KEY}
          {' '}
        </a>
      </Typography>
      <CustomBox>
        <Button
          variant='contained'
          color='primary'
          sx={{ my: "1rem", color: colors.white, backgroundColor: colors.darkPrimary }}
          onClick={handleSubmit}
        >
          {LOGIN}
        </Button>
      </CustomBox>
    </CustomContainer>
  );
};

export default Form;
