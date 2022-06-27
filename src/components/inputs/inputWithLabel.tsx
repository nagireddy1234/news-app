import React, { useEffect, useState, FC } from 'react'
import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import colors from "../../theme/colors"


interface InputWithLabelProps {
  label?: string,
  inputValue?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomGrid = styled(Grid)({
  padding: '1rem',
  display: 'flex',
})

const getStyle = (label?: string) => {
  return {
    outline: "none",
    borderRadius: "5px",
    backgroundColor: label === "API key" ? colors.lightGray : colors.white,
    border: label === "API key" ? "none" : "1px solid black",
    width: "50%",
    padding: "0.5rem",
    "&:hover": {
      border: "none",
      outline: "none",
    },
    "&:active": {
      border: "none",
      outline: "none",
    },
    "@media (max-width:600px)": {
      width: "70%",
    },
  };
};

const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  inputValue,
  onChange,
}) => {

  return (
    <CustomGrid container alignItems='center'
      justifyContent='center'>
      <Typography variant='body1' sx={{
        width: '11%', fontWeight: 600, "@media(max-width:600px)": {
          width: '22%',
        },
      }}
      >
        {label}
      </Typography>
      <span style={{ margin: "0 0.2rem", fontWeight: 900 }}>:</span>
      <input
        style={getStyle(label)}
        type="text"
        value={inputValue}
        onChange={onChange}
        disabled={label === "API key"}
      />
    </CustomGrid>
  );
};

export default InputWithLabel;
