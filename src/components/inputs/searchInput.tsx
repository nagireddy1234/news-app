import { Container, Grid, InputBase, Button } from "@mui/material";
import styled from "@mui/system/styled";
import { Search } from "@mui/icons-material";
import React, { FC } from "react";
import colors from "../../theme/colors";
import { SUBMIT } from "../../typeConstants";

const CustomGrid = styled(Grid)({
  backgroundColor: colors.white,
  display: "flex",
  paddingLeft: "0.75rem",
  alignItems: "center",
  border: `1px solid ${colors.black}`,
  borderRadius: "1rem",
  width: "75%",
  margin: "auto",
  "@media (max-width:750px)": {
    width: "100%",
  },
});

const CustomInput = styled(InputBase)({
  padding: "0 0.5rem",
  width: "100%",
  "& .MuiInputBase-input": {
    textAlign: "start",
  },
  "&::placeholder": {
    textAlign: "center",
    color: `${colors.black} !important`,
  },
});

const CustomButton = styled(Button)({
  width: "20%",
  "@media (max-width:750px)": {
    marginTop: "1rem",
    width: "50%",
  },
});

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  value: string;
}

const SearchInput: FC<SearchInputProps> = ({ onChange, onSubmit, value }) => (
  <Container
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      "@media (max-width:750px)": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <CustomGrid>
      <Search sx={{ color: colors.black }} />
      <CustomInput value={value} placeholder='Search' onChange={onChange} />
    </CustomGrid>
    <CustomButton
      variant='outlined'
      sx={{
        width: "20%",
        textTransform: "uppercase",
        color: colors.black,
        border: `1px solid ${colors.black}`,
      }}
      onClick={onSubmit}
    >
      {" "}
      {SUBMIT}{" "}
    </CustomButton>
  </Container>
);

export default SearchInput;
